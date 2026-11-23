import ENV from "./config/env.js";
import express from "express"
import connectDB from "./config/db.js";
import mainRouter from "./routes/index.routes.js";
import cookieParser from "cookie-parser";

const app = express();



const PORT = ENV.PORT

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1",mainRouter)

try {
   
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
     
    connectDB();
})
} catch (error) {
    console.log("Internal server error")
}

