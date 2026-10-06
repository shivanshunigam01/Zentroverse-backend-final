import { Router } from "express";
import {
  importCustomers,
  listReferrals,
  lookupCustomer,
  submitReferral,
  trackClick,
  updateReferral,
} from "../controllers/hyOffers.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/referrals", submitReferral);
router.get("/referrals", requireAdmin, listReferrals);
router.post("/referrals/update", requireAdmin, updateReferral);
router.get("/referrals/lookup/:code", lookupCustomer);
router.post("/track-click", trackClick);
router.post("/customers/import", requireAdmin, importCustomers);

export default router;
