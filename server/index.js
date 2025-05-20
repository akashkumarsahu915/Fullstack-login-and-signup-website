import express from "express";
import dotenv from "dotenv"
import connectDb from "./database/dbConnect.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
connectDb();
const app = express();
const port = process.env.PORT
// apis
app.use(cors({ origin: 'http://localhost:5173',}))
dotenv.config({});
app.use(express.json());
app.use("/api/user", userRoute);
app.use(cookieParser());



app.get("/home", (req, res) => {
    res.status(200).json({
        success: true,
        message: "iam comming from backend"
    })
})
app.listen(port, () => {
    console.log(`server is listening at ${port}`);
    
})
