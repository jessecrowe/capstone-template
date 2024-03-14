import { Router } from "express";
import { validateSignIn, validateSignUp } from "../middleware/validation.middleware";
import { handleSignIn, handleSignUp } from "../controllers/auth.controllers";

const router = Router()

router.post("/signup", validateSignUp, handleSignUp)
router.post("/signin", validateSignIn, handleSignIn)

export default router;