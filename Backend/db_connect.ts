import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DB_CONNECTION_STRING: string | undefined =
      process.env.DB_CONNECTION_STRING;
    if (!DB_CONNECTION_STRING) {
      console.warn("Connection string is undefined in Environment Variable.");
      return;
    }

    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("Connected to Database.");
  } catch (err: any) {
    console.error("Database Connection Error: ", err);
  }
};

export default connectDB;