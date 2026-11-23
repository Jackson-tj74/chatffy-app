import dotenv from "dotenv"

dotenv.config();

const ENV ={
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    SECRET_KEY: process.env.SECRET_KEY,
    RESENDER_API: process.env.RESENDER_API,
    FROM_EMAIL: process.env.FROM_EMAIL,
    FROM_NAME: process.env.FROM_NAME,
    clientURL: process.env.CLIENTURL,
    NODE_ENV: process.env.NODE_ENV,
}

export default ENV