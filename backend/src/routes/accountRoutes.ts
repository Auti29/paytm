import {RequestHandler, Router} from "express";
import getBalance from "../controllers/accountsControllers/getBalance";
import authMiddleware from "../middlewares/authMiddleware";

const accountRouter = Router();

accountRouter.get('/balance', authMiddleware as RequestHandler, getBalance);

export default accountRouter;