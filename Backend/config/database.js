
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path : "../config/.env"
})


const dataBaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to MONGO-DB") ;
    }).catch((error)=>{
        console.log(error) ;
    })
  }


export default dataBaseConnection
