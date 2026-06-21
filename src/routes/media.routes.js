import { Router } from "express";
import { mediaStatus, uploadMedia } from "../controllers/media.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/status", requireAdmin, mediaStatus);
router.post("/upload", requireAdmin, uploadMedia);

export default router;
