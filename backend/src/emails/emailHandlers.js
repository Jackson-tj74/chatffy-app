import { resenderClient } from "../config/resend.js"
import { sender } from "../config/resend.js"
import { createWelcomeEmailTemplate } from "./email.tamplate.js"


const sendWelcomeEmail = async(email,name,clientURL)=>{

     const {data,error}= await resenderClient.emails.send({
        from: 'Chattfy <onboarding@resend.dev>',
        to:email,
        subject: "Wellcome to chattfy app",
        html: createWelcomeEmailTemplate(name,clientURL)
         
     })
      console.log(data)

     if(error){
        console.log("Error sending to send email",error)
        throw new Error(error)
     }
     console.log("wellcome email sent sucessfully",data)
    
 
}

export default sendWelcomeEmail