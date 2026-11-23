
import jwt from "jsonwebtoken"
import ENV from "../config/env.js"

const  generateToken = (userId,res) =>{
   
    const SECRET_KEY = ENV.SECRET_KEY
    try {
        if(!SECRET_KEY){
            throw new error("Secret is not found")
        }
        
        const Token = jwt.sign({userId},ENV.SECRET_KEY,{expiresIn:"7d"})

        res.cookie("jwt",Token,{
            maxAge: 7 * 24 * 60 * 60 * 1000,
              httpOnly: true,
              sameSite: "strict",
              secure: ENV.NODE_ENV !== "development",
        })
    } catch (error) {
        
        return res.status(500).json({message:"Internal server error",error})
    }
  
    

}

export default generateToken

