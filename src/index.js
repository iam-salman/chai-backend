import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const app = express();

const PORT = process.env.PORT || 8000;

/*
(async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });
        
        console.log(
            `\n MONGODB connected, DB HOST: ${connectionInstance.connection.host}`
        );
        
        // console.log(connectionInstance);
        
        app.listen(PORT, () => {
            console.log(`Server is on the port: ${PORT}`);
        });
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})();

*/

connectDB();
