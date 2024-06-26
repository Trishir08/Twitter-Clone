import express from "express"
import dotenv from "dotenv"
import dataBaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"
import cors from "cors";

const app = express() ; 
dotenv.config({
    path : ".env"
})
dataBaseConnection() ;

//middlewares
app.use(express.urlencoded({
    extended : true
})) ; 
app.use(express.json()) ;
app.use(cookieParser());
const corsOptions = {
    origin : "http://localhost:8080" ,
    credentials : true
}
app.use(cors(corsOptions)) ;

//api
app.use("/api/v1/user" , userRoute)
app.use("api/v1/tweet" , tweetRoute)

app.listen( process.env.PORT , ()=>{
    console.log(`Server listens at port ${process.env.PORT}`)
})