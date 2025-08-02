import { RequestHandler, Router } from "express";
import registration from "../controllers/authControllers/registration";
import login from "../controllers/authControllers/login";
import userUpdate from "../controllers/resourceControllers/user";
import authMiddleware from "../middlewares/authMiddleware";
import searchUsers from "../controllers/resourceControllers/bulkUsers";

const userRouter = Router();

userRouter.post('/signup', registration);
userRouter.post('/signin', login);
userRouter.put('/user', authMiddleware as unknown as RequestHandler, userUpdate);
userRouter.get('/bulk', authMiddleware as RequestHandler, searchUsers);
export default userRouter;