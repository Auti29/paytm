import express from "express";
import mongoose from "mongoose";
import router  from "./routes/rootRoute";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', router);




async function main() {
    await mongoose.connect("mongodb://localhost:27017/paytm");
    app.listen(3000, () => {
        console.log("connected!!");
    })
}

main();