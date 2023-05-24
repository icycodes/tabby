import { ServerAgent } from "../ServerAgent";
import { StdIOServer } from "./StdIOServer";

const agent = new ServerAgent();
const server = new StdIOServer();
server.bind(agent);
server.listen();
