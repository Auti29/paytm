import { RequestHandler, Router, Response, Request } from "express";
import registration from "../controllers/authControllers/registration";
import login from "../controllers/authControllers/login";
import userUpdate from "../controllers/resourceControllers/user";
import authMiddleware, { authRequest } from "../middlewares/authMiddleware";
import searchUsers from "../controllers/resourceControllers/bulkUsers";
import { AccountModel } from "../db";

const userRouter = Router();

userRouter.post('/signup', registration);
userRouter.post('/signin', login);
userRouter.put('/updateProfile', authMiddleware as unknown as RequestHandler, userUpdate);
userRouter.get('/getProfile', authMiddleware as RequestHandler, async (req: Request, res: Response) => {
        const userId = (req as authRequest).userId;
        try{
            const userAcc = await AccountModel.findOne({
                userId
            }).populate({path: "userId", select: "-password"});

            if(!userAcc){
                return res.status(411).json({
                    message: "no user found sign up first!!"
                });
            }

            return res.status(200).json({
                message: "successful", 
                user: userAcc
            });
        }catch(e){
            console.log("error", e);
            return res.status(500).json(
                {
                    message: "internal server error!!" + e
                }
            );
        }
})
userRouter.get('/bulkUsers', authMiddleware as RequestHandler, searchUsers);
export default userRouter;