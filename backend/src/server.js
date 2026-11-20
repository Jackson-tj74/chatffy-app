import express from "express"
import ENV from "./config/env.js";
import connectDB from "./config/db.js";


const app = express();
const PORT = ENV.PORT

try {
   
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
     
    connectDB();
})
} catch (error) {
    console.log("Internal server error")
}

