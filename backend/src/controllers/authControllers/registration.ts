import { NextFunction, Request, Response } from "express"
import { AccountModel, UserModel } from "../../db";


export default async function registration (req: Request, res: Response) {
    const {username, password, firstName, lastName} = req.body;


    if(!username || !password || !firstName || !lastName){
       return  res.status(400).json({
        message: "required fields are missing!"
       });
    }

    const user = await UserModel.findOne({
        username
    });

    if(user){
        return res.status(409).json({
            message: "user already exists, login!!"
        });
    }


    try{
        const userCreated = await UserModel.create({
            username, 
            password, 
            firstName, 
            lastName
        });

        const userId = userCreated._id;

        await AccountModel.create({
            userId, 
            balance: 1 + Math.random() * 10000
        })

        return res.status(200).json({
            message:  "registration successful!!"
        });
    }catch(e){
        console.log("server error", e);
        return res.status(500).json({
            error: e
        });
    }

} 