import { Request, Response } from "express";
import { UserModel } from "../../db";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export default async function login(req: Request, res: Response){
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(409).json({
            message: "credentials required!!!"
        })
    }

    try{
        const user = await UserModel.findOne({
            username
        });
    
        if(!user){
            return res.status(400).json({
                message: "no user found!! register first!!"
            });
        }
    
        const isVerified = await bcrypt.compare(password, user.password);
    
        if(!isVerified){
            return res.status(400).json({
                message: "wrong credentials"
            });
        }

        //jwt 
        const secret = process.env.JWT_SECRET;

        if(!secret){
            return res.json({
                message: "jwt secret is missing!!"
            })
        }

        const token = jwt.sign({id: user._id}, secret, {expiresIn: "5h"});

        return res.status(200).json({
            message: "sign in successful!!", 
            token
        });


    }catch(e){
        console.log("server error: ", e);
        return res.status(500).json({
            message: 'server error'+ e
        });
    }
}