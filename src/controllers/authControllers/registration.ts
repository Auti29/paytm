import { NextFunction, Request, Response } from "express"
import { UserModel } from "../../db";


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
        await UserModel.create({
            username, 
            password, 
            firstName, 
            lastName
        });

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