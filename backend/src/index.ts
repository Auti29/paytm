import express from "express";
import mongoose from "mongoose";
import userRouter  from "./routes/rootRoute";
import accountRouter from "./routes/accountRoutes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const DB_CONN = process.env.DB_CONN;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/account', accountRouter);




async function main() {
    await mongoose.connect(DB_CONN!);
    app.listen(3000, () => {
        console.log("connected!!");
    })
}

main();