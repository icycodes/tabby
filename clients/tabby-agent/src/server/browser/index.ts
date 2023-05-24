import { ServerAgent } from "../ServerAgent";
import { WebWorkerServer } from "./WebWorkerServer";

const agent = new ServerAgent();
const server = new WebWorkerServer();
server.bind(agent);
server.listen();
