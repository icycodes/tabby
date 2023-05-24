import { CancelablePromise } from "../generated";
import { Agent, agentEventNames } from "../Agent"
import { RpcRequest, CancellationRequest, RpcResponse } from '../Rpc';

export abstract class RpcServer {
  private ongoingRequests: { [id: number]: CancelablePromise<any> } = {};
  private agent: Agent | null = null;

  async handleRequest(request: RpcRequest): Promise<RpcResponse> {
    const response: RpcResponse = [0, null];
    try {
      if (!this.agent) {
        throw new Error(`Agent not bound.\n`);
      }
      response[0] = request[0];

      let funcName = request[1].func;
      if (funcName === "cancelRequest") {
        response[1] = this.cancelRequest(request as CancellationRequest);
      } else {
        let func = this.agent[funcName];
        if (!func) {
          throw new Error(`Unknown function: ${funcName}`);
        }
        const result = func.apply(this.agent, request[1].args);
        if (result instanceof CancelablePromise) {
          this.ongoingRequests[request[0]] = result;
          response[1] = await result;
          delete this.ongoingRequests[request[0]];
        } else {
          response[1] = result;
        }
      }
    } catch (e) {
      this.log(e);
    } finally {
      return response;
    }
  }

  private cancelRequest(request: CancellationRequest): boolean {
    const ongoing = this.ongoingRequests[request[1].args[0]];
    if (!ongoing) {
      return false;
    }
    ongoing.cancel();
    return true;
  }

  bind(agent: Agent): void {
    this.agent = agent;
    for (const eventName of agentEventNames) {
      this.agent.on(eventName, (event) => {
        this.sendResponse([0, event]);
      })
    }
  }

  abstract listen(): void;
  abstract sendResponse(response: RpcResponse): void;
  abstract log(error: Error): void;
}
