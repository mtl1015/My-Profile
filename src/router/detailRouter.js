import express from "express";
import {
  mainDetail,
  civilDetail,
  codingDetail,
  teacherDetail,
  travelDetail,
} from "../controller/detailController.js";
const detailRouter = express.Router();

detailRouter.get("/", mainDetail);
detailRouter.get("/civil", civilDetail);
detailRouter.get("/coding", codingDetail);
detailRouter.get("/teacher", teacherDetail);
detailRouter.get("/travel", travelDetail);

export default detailRouter;
