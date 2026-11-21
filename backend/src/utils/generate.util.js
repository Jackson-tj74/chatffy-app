
import jwt from "jsonwebtoken"
import ENV from "../config/env.js"

const  generateToken = (userId,res) =>{
   
    const SECRET_KEY = ENV.SECRET_KEY
    try {
        if(!SECRET_KEY){
            throw new error("Secret is not found")
        }
        
        const Token = jwt.sign(userId,process.env.SECRET_KEY,{expiresIn:"7d"})

        res.cookie("jwt",Token,{
            maxAge:70*60*80*100,
            httpOnly:true,
            secure:`${process.env.NODE_DEV} `,"false":"true" 
        })
    } catch (error) {
        
        return res.status(500).json({message:"Internal server error",error})
    }
  
    

}

export default generateToken