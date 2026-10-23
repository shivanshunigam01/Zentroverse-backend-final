import * as attendanceService from "../services/attendance.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
function routeId(req) {
    const id = req.params.id;
    if (typeof id !== "string") {
        throw AppError.badRequest("Invalid identifier");
    }
    return id;
}
export async function getToday(req, res) {
    const data = await attendanceService.getToday(requireAuth(req));
    return sendSuccess(res, { data });
}
export async function checkIn(req, res) {
    const data = await attendanceService.checkIn(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Checked in", data });
}
export async function checkOut(req, res) {
    const data = await attendanceService.checkOut(requireAuth(req));
    return sendSuccess(res, { message: "Checked out", data });
}
export async function startBreak(req, res) {
    const data = await attendanceService.startBreak(requireAuth(req));
    return sendSuccess(res, { message: "Break started", data });
}
export async function endBreak(req, res) {
    const data = await attendanceService.endBreak(requireAuth(req));
    return sendSuccess(res, { message: "Break ended", data });
}
export async function getCalendar(req, res) {
    const data = await attendanceService.getCalendar(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function listAttendance(req, res) {
    const data = await attendanceService.listAttendance(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getDailyOverview(req, res) {
    const data = await attendanceService.getDailyOverview(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getMonthlyReport(req, res) {
    const data = await attendanceService.getMonthlyReport(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAttendance(req, res) {
    const attendance = await attendanceService.getAttendance(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { attendance } });
}
export async function updateAttendance(req, res) {
    const attendance = await attendanceService.updateAttendance(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Attendance updated", data: { attendance } });
}
//# sourceMappingURL=attendance.controller.js.map