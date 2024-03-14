import { Router } from "express";
import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";
import authRouter from "./auth.routes";
// Router URL: /api
const router = Router();

router.use("/auth", authRouter)
// router.use("/users", userRoutes);
router.use("/books", bookRoutes);

export default router;
