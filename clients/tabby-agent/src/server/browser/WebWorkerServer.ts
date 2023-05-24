import { RpcRequest, RpcResponse } from "../../Rpc";
import { RpcServer } from "../RpcServer";

/**
 * This class implements the RpcServer using WebWorker.
 */
export class WebWorkerServer extends RpcServer {
  constructor() {
    super();
  }

  listen() {
    window.onmessage = (event: MessageEvent<RpcRequest>) => {
      this.handleRequest(event.data).then((response) => {
        this.sendResponse(response);
      });
    };
  }

  sendResponse(response: RpcResponse): void {
    window.postMessage(response);
  }

  log(error: Error): void {
    console.error(error);
  }
}
