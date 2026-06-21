import { Router } from "express";
import { getCms, updateCms } from "../controllers/cms.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/", getCms);
router.put("/", requireAdmin, updateCms);

export default router;
