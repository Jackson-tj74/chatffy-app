import express from "express"
import controllers from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup",controllers.signup)

export default authRouter 