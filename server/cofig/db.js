import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Server connected CSDL");
    } catch (error) {
        console.error("Server no connection CSDL", error);
        process.exit(-1)
    }
}