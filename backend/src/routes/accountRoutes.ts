import {RequestHandler, Router} from "express";
import getBalance from "../controllers/accountsControllers/getBalance";
import authMiddleware from "../middlewares/authMiddleware";
import transferFunds from "../controllers/accountsControllers/transferFunds";
import transactionHistory from "../controllers/accountsControllers/transactionHistory";

const accountRouter = Router();

accountRouter.get('/balance', authMiddleware as RequestHandler, getBalance);
accountRouter.post('/transferFunds', authMiddleware as RequestHandler, transferFunds);
accountRouter.get('/transactionHistory', authMiddleware as RequestHandler , transactionHistory);


export default accountRouter;