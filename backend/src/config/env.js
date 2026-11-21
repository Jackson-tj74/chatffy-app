import dotenv from "dotenv"

dotenv.config();

const ENV ={
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    SECRET_KEY: process.env.SECRET_KEY
}

export default ENV