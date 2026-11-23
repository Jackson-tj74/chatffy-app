import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    username:{
           type:String,
           required:true,
           minlengh:10,
           maxlength:20
           
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlengh:8,
        maxlength:30

    }
},
{
    timestamps:true
}

)

const User = mongoose.model("User",userSchema)
export default User
