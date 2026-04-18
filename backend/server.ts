import { createServer } from "node:http";
import { WebSocketServer } from "ws";
import { loadEnv } from "../shared/load-env.js";
import { createApp } from "./app.js";
import { env, hasDatabaseUrl } from "./config/env.js";

import dotenv from 'dotenv'
dotenv.config();
loadEnv();

const app = createApp();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });


server.listen(env.backendPort, () => {
  console.log(`[backend] listening on http://localhost:${env.backendPort}`);
  console.log(`[backend] websocket available at ws://localhost:${env.backendPort}/ws`);
  console.log(
    `[backend] repository=${hasDatabaseUrl() ? "prisma-postgres" : "in-memory-fallback"}`,
  );
 
});
