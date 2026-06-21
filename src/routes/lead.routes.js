import { Router } from "express";
import { createLead, deleteLead, listLeads, updateLead } from "../controllers/lead.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/", createLead);
router.get("/", requireAdmin, listLeads);
router.post("/update", requireAdmin, updateLead);
router.post("/delete", requireAdmin, deleteLead);

export default router;
