import { Router } from "express";
import { validateSignIn, validateSignUp } from "../middleware/validation.middleware";
import { handleSignIn, handleSignUp } from "../controllers/auth.controllers";

const authRouter = Router()
authRouter
    .post("/signup", validateSignUp, handleSignUp)
    .post("/signin", validateSignIn, handleSignIn)

export default authRouter;