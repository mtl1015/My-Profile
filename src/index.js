import express from "express";
import detailRouter from "./router/detailRouter.js";
import rootRouter from "./router/rootRouter.js";
import morgan from "morgan";
const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.use(logger);
app.use("/", rootRouter);
app.use("/detail", detailRouter);

export default app;
