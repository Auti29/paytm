import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";


export interface userInterface {
    username: string, 
    password: string, 
    firstName?: string, 
    lastName?: string, 
    _id: mongoose.Types.ObjectId, 
    createdAt ?: Date, 
    updatedAt ?: Date, 
} 

const UserSchema = new Schema<userInterface>({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        lowercase: true, 
        minLength: 3, 
        maxLength:  30, 
        trim: true 
    }, 

    password: {
        type: String,
        trim:  true, 
        required: true, 
        minLength: 5, 
        maxLength:  50
    }, 


    firstName: {
                type: String,
        required: true,
        trim: true,
        maxLength: 50 
    }, 

    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50 
    }

}, {
    timestamps: true
});


UserSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8);
    }

    next();
})


export const UserModel = model("users", UserSchema);