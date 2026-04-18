import { Router } from "express";
import { agentsRouter } from "./agents-routes.js";


export const apiRouter = Router();


apiRouter.use("/agents", agentsRouter);
