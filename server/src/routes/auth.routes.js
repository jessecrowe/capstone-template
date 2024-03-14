import { Router } from "express";
// import { validateSignIn, validateSignUp } from "../middleware/validation.middleware";
import { handleSignIn, handleSignUp } from "../controllers/auth.controllers";

const authRouter = Router()
authRouter
    .post("/signup", handleSignUp, ()=>console.log("hi"))
    .post("/signin", handleSignIn)

export default authRouter;