import { Router } from "express";
import { requireZfAuth } from "../middleware/requireBearer.js";
import {
  zfAddRemark,
  zfAssignLead,
  zfAutomationsGet,
  zfAutomationsPost,
  zfAudit,
  zfBranchesGet,
  zfBranchesPost,
  zfCapiEvents,
  zfChangeStage,
  zfCompleteFollowup,
  zfCreateFollowup,
  zfCreateTenant,
  zfDashboard,
  zfExportLeads,
  zfGetLead,
  zfIngestLead,
  zfIntegrationsGet,
  zfIntegrationsPost,
  zfJobRetry,
  zfJobsList,
  zfJobsProcess,
  zfListLeads,
  zfListTenants,
  zfLogin,
  zfPlatformOverview,
  zfUpdateTenant,
  zfUsersGet,
  zfUsersPost,
  zfVerifyLead,
  zfWebhookMeta,
} from "../controllers/zentroflow.controller.js";

const router = Router();

router.post("/auth/login", zfLogin);
router.post("/webhooks/meta", zfWebhookMeta);

router.use(requireZfAuth);

router.get("/platform/overview", zfPlatformOverview);
router.get("/tenants", zfListTenants);
router.post("/tenants", zfCreateTenant);
router.patch("/tenants/:id", zfUpdateTenant);

router.get("/dashboard", zfDashboard);
router.get("/leads", zfListLeads);
router.get("/leads/export", zfExportLeads);
router.get("/leads/:id", zfGetLead);
router.post("/v1/leads/ingest", zfIngestLead);
router.post("/leads/:id/stage", zfChangeStage);
router.post("/leads/:id/remarks", zfAddRemark);
router.post("/leads/:id/followups", zfCreateFollowup);
router.post("/followups/:followUpId/complete", zfCompleteFollowup);
router.post("/leads/:id/assign", zfAssignLead);
router.post("/leads/:id/verify", zfVerifyLead);

router.get("/integrations", zfIntegrationsGet);
router.post("/integrations", zfIntegrationsPost);
router.get("/jobs", zfJobsList);
router.post("/jobs/:id/retry", zfJobRetry);
router.post("/jobs/process", zfJobsProcess);
router.get("/branches", zfBranchesGet);
router.post("/branches", zfBranchesPost);
router.get("/users", zfUsersGet);
router.post("/users", zfUsersPost);
router.get("/automations", zfAutomationsGet);
router.post("/automations", zfAutomationsPost);
router.get("/capi/events", zfCapiEvents);
router.get("/audit", zfAudit);

export default router;
