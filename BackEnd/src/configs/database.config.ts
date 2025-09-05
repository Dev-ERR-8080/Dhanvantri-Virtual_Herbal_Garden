import { ConnectOptions, connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbconnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        () => console.log("Connection to MongoDB successful"),
        (error) => console.error("Error connecting to MongoDB:", error)
    );
};
