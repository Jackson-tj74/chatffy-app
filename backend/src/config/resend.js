import {Resend} from "resend"
import dotenv from "dotenv"

dotenv.config();

const resenderClient = new Resend(`${process.env.RESENDER_API}`)

const sender = {
    name: process.env.FROM_NAME,
    email:process.env.FROM_EMAIL
}

export{
    resenderClient,
    sender
}