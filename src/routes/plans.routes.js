import { Router } from "express";
import {
  createPlan,
  deletePlan,
  getPlanById,
  getPlans,
  putCatalog,
  putTrial,
  startTrial,
  updatePlan,
} from "../controllers/plans.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/", getPlans);
router.put("/catalog", requireAdmin, putCatalog);
router.put("/trial", requireAdmin, putTrial);
router.post("/trial/start", startTrial);
router.post("/", requireAdmin, createPlan);
router.get("/:id", getPlanById);
router.put("/:id", requireAdmin, updatePlan);
router.delete("/:id", requireAdmin, deletePlan);

export default router;
