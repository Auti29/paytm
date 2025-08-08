import { Request, Response } from "express";
import { authRequest } from "../../middlewares/authMiddleware";
import { TransactionModel } from "../../db";
export default async function transactionHistory(req: Request, res: Response) {
    try{

        const userId = (req as authRequest).userId;
    
        if(!userId){
            return res.status(401).json({
                message: "signin first!!"
            });
        } 
        
        const transactions = await TransactionModel.find({
            $or: [
                {sender: userId}, 
                {receiver: userId}
            ]
        }).populate([
          {  path: "sender", select: "-password"}, 
          {  path: "receiver", select: "-password"}, 

        ]);
    
        if(transactions?.length < 1){
            return res.status(200).json({
                message: "no transactions made!!"
            });
        }
    
        return res.status(200).json({
            message: "successful", 
            transactions
        });
    }catch(e) {
        console.log(e);
        return res.status(500).json({
            message: "Internal server error!!" + e
        });
    }

}