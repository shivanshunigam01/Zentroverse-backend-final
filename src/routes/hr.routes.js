import { Router } from "express";
import { requireBearerKind } from "../middleware/requireBearer.js";
import {
  hrAnnouncements,
  hrAttendanceCheckIn,
  hrAttendanceCheckOut,
  hrAttendanceList,
  hrAttendanceToday,
  hrDashboard,
  hrDepartments,
  hrDesignations,
  hrEmployees,
  hrLeaveRequests,
  hrLeaveReview,
  hrLeaveTypes,
  hrLogin,
  hrMe,
  hrOrganization,
  hrOrganizations,
  hrPlatformOverview,
  hrProfilePatch,
  hrRegister,
} from "../controllers/hr.controller.js";

const router = Router();
const hrAuth = requireBearerKind("hr");
const hrOrAdmin = requireBearerKind("hr", { allowAdmin: true });

router.post("/auth/register", hrRegister);
router.post("/auth/login", hrLogin);
router.get("/auth/me", hrAuth, hrMe);

router.get("/platform/overview", hrOrAdmin, hrPlatformOverview);
router.get("/organizations", hrOrAdmin, hrOrganizations);

router.get("/dashboard", hrAuth, hrDashboard);
router.get("/organization", hrAuth, (req, res, next) => hrOrganization(req, res, next));
router.patch("/organization", hrAuth, (req, res, next) => hrOrganization(req, res, next));

router.get("/departments", hrAuth, hrDepartments);
router.post("/departments", hrAuth, hrDepartments);
router.get("/designations", hrAuth, hrDesignations);
router.post("/designations", hrAuth, hrDesignations);

router.get("/employees", hrAuth, hrEmployees);
router.post("/employees", hrAuth, hrEmployees);
router.get("/employees/:id", hrAuth, hrEmployees);
router.patch("/employees/:id", hrAuth, hrEmployees);

router.get("/attendance/today", hrAuth, hrAttendanceToday);
router.post("/attendance/check-in", hrAuth, hrAttendanceCheckIn);
router.post("/attendance/check-out", hrAuth, hrAttendanceCheckOut);
router.get("/attendance", hrAuth, hrAttendanceList);

router.get("/leave/types", hrAuth, hrLeaveTypes);
router.get("/leave/requests", hrAuth, hrLeaveRequests);
router.post("/leave/requests", hrAuth, hrLeaveRequests);
router.post("/leave/requests/:id/review", hrAuth, hrLeaveReview);

router.get("/announcements", hrAuth, hrAnnouncements);
router.post("/announcements", hrAuth, hrAnnouncements);
router.patch("/users/profile", hrAuth, hrProfilePatch);

export default router;
