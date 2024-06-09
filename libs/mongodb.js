import mongoose from "mongoose";
const mongourl = "mongodb://127.0.0.1:27017/Tasks";
const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongourl);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

