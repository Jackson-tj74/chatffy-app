import mongoose from "mongoose"
import ENV from "./env.js"

const connectDB = async ()=>{
    try {
        const MONGODB_URL = ENV.MONGODB_URL
        if(!MONGODB_URL){
            throw new Error("MongoDb url is not found")
        }

        await mongoose.connect(MONGODB_URL)
        .then(()=>{

              console.log("Database connect sucessfully ")
        })
       
    } catch (error) {
        console.log("error",error)
    }
}

export default connectDB