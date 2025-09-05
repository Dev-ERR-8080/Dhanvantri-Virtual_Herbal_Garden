import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import  placeRouter  from './routers/place.router';
import userRouter from './routers/user.router';
import therapyRouter from './routers/therapys.router';
import blogRouter from './routers/blog.router';
import { dbconnect } from './configs/database.config';
dbconnect();


const app = express();
app.use(express.json());


app.use(cors({
    credentials:true,
    origin: ["http://localhost:4200"]
}));


app.use("/api/places",placeRouter);
app.use("/api/users",userRouter);
app.use("/api/therapys",therapyRouter);
app.use("/api/blog",blogRouter);

const port=5000;
app.listen(port,()=>{
    console.log("Website served on http://localhost:"+port);
});