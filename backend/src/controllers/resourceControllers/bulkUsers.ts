import { Request, Response } from "express";
import { UserModel } from "../../db";

export default async function searchUsers(req: Request, res: Response){
    const filter = req.query.filter;

    const users = await UserModel.find({
        $or: [
            {
                firstName: {"$regex": filter}
            }, 
            {
                lastName: {"$regex": filter}
            }, 
            {
                username: {"$regex": filter}
            }
        ]
    })

    res.json(users.map(user => ({
        username: user.username, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        id: user._id
    }))
    )
}