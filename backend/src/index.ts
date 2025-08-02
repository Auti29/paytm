import express from "express";
import mongoose from "mongoose";
import userRouter  from "./routes/rootRoute";
import accountRouter from "./routes/accountRoutes";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/account', accountRouter);




async function main() {
    await mongoose.connect("mongodb://localhost:27017/paytm");
    app.listen(3000, () => {
        console.log("connected!!");
    })
}

main();