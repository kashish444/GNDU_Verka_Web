import mongoose from "mongoose";
import dotenv from "dotenv";



const connectDb = async () => {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
