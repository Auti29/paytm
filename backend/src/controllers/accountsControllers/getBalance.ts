import { Request, Response } from "express";
import { authRequest } from "../../middlewares/authMiddleware";
import { AccountModel } from "../../db";


export default async function getBalance(req: Request, res: Response) {
    try{
        
        const userId = (req as unknown as authRequest).userId;
    
        const userAcc = await AccountModel.findOne({
            userId
        });
    
        if(!userAcc){
            return res.status(409).json({
                message: "account not found!!"
            });
        }
    
        return res.status(200).json({
            balance: userAcc.balance
        });
    }catch(e){
        console.log("error", e);
        res.status(500).json({
            message: "internal server error!!"
        });
    }
}