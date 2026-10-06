import { Router } from "express";
import { applyBajaj, listBajajApplications, updateBajajApplication } from "../controllers/bajaj.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/apply", applyBajaj);
router.get("/applications", requireAdmin, listBajajApplications);
router.post("/update", requireAdmin, updateBajajApplication);

export default router;
