import {Response, Request} from "express"
import { UserModel } from "../../db";
import { authRequest } from "../../middlewares/authMiddleware";
import bcrypt from "bcrypt";

export interface updatesInterface {
    password?: string, 
    lastName ?: string, 
    firstName?: string, 
}

export default async function userUpdate(req: Request, res: Response) {
    try{
        const { password, firstName, lastName} = (req as authRequest).body;

        const updates: updatesInterface = {};

        if(password.length > 0){
            const hashed = await bcrypt.hash(password, 8);
            updates.password = hashed;
        }
        if(firstName.length > 0){
            updates.firstName = firstName
        }
        if(lastName.length > 0){
            updates.lastName = lastName
        }


        await UserModel.updateOne({
            _id: (req as authRequest).userId
        }, updates);

        return res.status(200).json({
            message: "info successfully updated!!"
        });

    }catch(e){
        console.log(e);
        return res.status(500).json({
            message: "internal server error"
        });
    }
}