import { Router } from "express";
import { getCms, getCmsSection, updateCms, updateCmsSection } from "../controllers/cms.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/", getCms);
router.put("/", requireAdmin, updateCms);
router.get("/sections/:section", getCmsSection);
router.put("/sections/:section", requireAdmin, updateCmsSection);

export default router;
