import { RpcRequest, RpcResponse } from "../../Rpc";
import { RpcServer } from "../RpcServer";
import { splitLines } from "../../utils";

/**
 * This class implements the RpcServer using stdio.
 * Every request and response should be single line JSON string and end with a newline.
 */
export class StdIOServer extends RpcServer {
  private readonly inStream: NodeJS.ReadStream = process.stdin;
  private readonly outStream: NodeJS.WriteStream = process.stdout;
  private readonly errLogger: NodeJS.WriteStream = process.stderr;

  private buffer: string = "";

  constructor() {
    super();
  }

  private handleInput(data: Buffer): void {
    const input = data.toString();
    this.buffer += input;
    const lines = splitLines(this.buffer);
    if (lines.length < 1) {
      return;
    }
    if (lines[lines.length - 1].endsWith("\n")) {
      this.buffer = "";
    } else {
      this.buffer = lines.pop()!;
    }
    for (const line of lines) {
      let request: RpcRequest | null = null;
      try {
        request = JSON.parse(line) as RpcRequest;
      } catch (e) {
        this.log(e)
        continue;
      }
      this.handleRequest(request).then((response) => {
        this.sendResponse(response);
      });
    }
  }

  listen() {
    this.inStream.on("data", this.handleInput.bind(this));
  }

  sendResponse(response: RpcResponse): void {
    this.outStream.write(JSON.stringify(response) + "\n");
  }

  log(error: Error): void {
    this.errLogger.write(JSON.stringify(error, Object.getOwnPropertyNames(error)) + "\n");
  }
}
