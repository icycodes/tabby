import { AgentFunction, AgentEvent } from "./Agent";

export type AgentFunctionRequest<T extends keyof AgentFunction> = [
  id: number,
  data: {
    func: T;
    args: Parameters<AgentFunction[T]>;
  }
]

export type CancellationRequest = [
  id: number,
  data: {
    func: "cancelRequest";
    args: [id: number];
  }
]

export type RpcRequest = AgentFunctionRequest<any> | CancellationRequest;

export type AgentFunctionResponse<T extends keyof AgentFunction> = [
  id: number, // Matched request id
  data: ReturnType<AgentFunction[T]>,
]

export type AgentEventNotification = {
  id: 0,
  data: AgentEvent,
}

export type CancellationResponse = [
  id: number, // Matched request id
  data: boolean,
]

export type RpcResponse = AgentFunctionResponse<any> | AgentEventNotification | CancellationResponse;
