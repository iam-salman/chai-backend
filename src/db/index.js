import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `MONGODB CONNECTED, DB HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED : ", error);

        throw error;

        process.exit(1);
    }
};

export default connectDB;
