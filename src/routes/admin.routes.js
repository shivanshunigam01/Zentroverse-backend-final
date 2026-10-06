import { Router } from "express";
import { adminLogin, adminMe, adminOverview } from "../controllers/admin.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/auth/login", adminLogin);
router.get("/auth/me", adminMe);
router.get("/overview", requireAdmin, adminOverview);

export default router;
