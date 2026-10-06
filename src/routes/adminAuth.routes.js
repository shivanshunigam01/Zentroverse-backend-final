import { Router } from "express";
import { adminLogin, adminMe } from "../controllers/admin.controller.js";

const router = Router();

router.post("/auth/login", adminLogin);
router.get("/auth/me", adminMe);

export default router;
