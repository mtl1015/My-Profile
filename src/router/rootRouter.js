import express from "express";
import { previewPage, mainPage } from "../controller/rootController.js";
const rootRouter = express.Router();

rootRouter.get("/", mainPage);
rootRouter.get("/preview", previewPage);

export default rootRouter;
