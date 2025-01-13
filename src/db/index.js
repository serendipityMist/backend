import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // app.on("error", (error) => {
    //   console.log(`GEtting ERRORRRRR!!!!!!!!`, error);
    // });
    console.log(
      `/n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED: ", error);
    process.exit(1);
  }
};

export default connectDB;
