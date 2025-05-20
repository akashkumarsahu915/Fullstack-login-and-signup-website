import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({})
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongo db connected");

    } catch (error) {
        console.log("error occur", error)
    }
}
export default connectDb;

