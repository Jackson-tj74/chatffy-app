import User from "../models/user.model.js"
import generateToken from "../utils/generate.util.js"

class controllers{

static signup = () => async(req,res)=>{
 
     const{username,email,password}=req.body

    try {
        

    if(!username || !password || !email){
        return res.status(400).json({message:"All fields are required"})
    }
    if(password.length < 6){
        return res.status(400).json({message:"Password must be greater than six strings"})
    }

    const user = User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exist"})
    }
     

    const hashPassword = bcrypt.hash(password,10)

    const newUser = new User({
        username,
        email,
        password:hashPassword
    })
  
    const saveUser = newUser.save()
    await generateToken(newUser.userId,res)
    
    return res.status(201).json({message:"new  user created sucessfully",saveUser})



    } catch (error) {

        return res.status(500).json({message:"Internal server error",error})
        
    }
   
}

}

export default controllers