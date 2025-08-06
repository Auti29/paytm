import { Request, Response } from "express";
import mongoose from "mongoose";
import { authRequest } from "../../middlewares/authMiddleware";
import { AccountModel, TransactionModel } from "../../db";

export default async function transferFunds(req: Request, res: Response) {
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        const {amount, receiverId} = req.body;
        const userId = (req as authRequest).userId;

        const senderAcc = await AccountModel.findOne({
            userId
        }).session(session);

        if(!senderAcc){
            await session.abortTransaction();
            return res.status(404).json({
                message: "account does not exist!!"
            });
        }

        if(senderAcc.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "insufficient funds!!"
            });
        }
        
        const receiverAcc = await AccountModel.findOne({
            userId: new mongoose.Types.ObjectId(receiverId)
        }).session(session);
        
        if(!receiverAcc){
            await session.abortTransaction();
            return res.status(400).json({
                message: "receiver account does not exists!"
            });
        }

        await AccountModel.updateOne({userId}, {$inc: {balance: -parseInt(amount)}}).session(session);
        await AccountModel.updateOne({userId: receiverId}, {$inc: {balance: parseInt(amount)}}).session(session);

        await TransactionModel.create([{
            sender: userId, 
            receiver: receiverId, 
            amountTransferred: amount
        }], {session: session});


        await session.commitTransaction();


        return res.status(200).json({
            message: "transaction sucessful!!"
        });

    }catch(e){
        console.log("error: ", e);
        res.status(500).json({
            message:  "Internal server error!!"
        });
        await session.abortTransaction();
    }finally{
        await session.endSession();
    }

}