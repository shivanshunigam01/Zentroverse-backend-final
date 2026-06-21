import { Router } from "express";
import { authExists, authProfile, loginUser, registerUser } from "../controllers/auth.controller.js";
import { requireDb } from "../middleware/requireDb.js";

const router = Router();

router.use(requireDb);

router.get("/exists", authExists);
router.get("/profile", authProfile);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
