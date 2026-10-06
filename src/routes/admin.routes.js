import { Router } from "express";
import { adminOverview } from "../controllers/admin.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
import { requireDb } from "../middleware/requireDb.js";

const router = Router();

router.use(requireDb);
router.get("/overview", requireAdmin, adminOverview);

export default router;
