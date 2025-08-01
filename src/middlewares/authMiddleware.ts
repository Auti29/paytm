import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface authRequest extends Request{
    userId: string | JwtPayload
}


export default function authMiddleware(req: authRequest, res: Response, next: NextFunction) {
    // @ts-ignore
    const authHeader: string = req.headers.get('authorization');

    if(!authHeader){
        return res.status(401).json({
            message: "no auth header"
        });
    }

    const token = authHeader.split(' ')[1];

    if(!token){
                return res.status(401).json({
            message: "no token"
        });

    }
    

    const secret = process.env.JWT_SECRET;

    if(!secret){
        return res.json({
            message: "no jwt secret"
        })
    }


    const decoded = jwt.verify(token, secret) as JwtPayload;

    if(!decoded){
         res.json({
            messsage: "decoding failed"
         });
    }

    req.userId = decoded.id;

    next();

}