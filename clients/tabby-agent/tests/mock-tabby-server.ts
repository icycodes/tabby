import express from "express";
import bodyParser from "body-parser";
import deepEqual from "deep-equal";
import { v4 as uuid } from "uuid";
import mockResponses from "./mock-responses.json";

const app: express.Application = express();
const port: number = 8087;

app.use(bodyParser.json());

app.get("/v1/health", (_: express.Request, res: express.Response) => {
  res.json({
    model: "mock",
    device: "cpu",
  });
});

app.post("/v1/completions", (req: express.Request, res: express.Response) => {
  const mock = mockResponses.find((entry) => deepEqual(entry.request, req.body));
  res.json(
    mock?.response ?? {
      id: `mock-${uuid()}`,
      choices: [],
    },
  );
});

app.post("/v1/events", (_: express.Request, res: express.Response) => {
  res.send("");
});

app.listen(port, () => {});
