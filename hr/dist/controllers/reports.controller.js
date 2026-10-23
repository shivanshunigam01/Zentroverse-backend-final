import * as reportsService from "../services/reports.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
function query(req) {
    return req.validatedQuery;
}
export async function employeeGrowth(req, res) {
    const data = await reportsService.employeeGrowthReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
export async function attendance(req, res) {
    const data = await reportsService.attendanceReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
export async function leave(req, res) {
    const data = await reportsService.leaveReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
export async function department(req, res) {
    const data = await reportsService.departmentReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
export async function recruitment(req, res) {
    const data = await reportsService.recruitmentReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
export async function payroll(req, res) {
    const data = await reportsService.payrollReport(requireAuth(req), query(req));
    return sendSuccess(res, { data });
}
//# sourceMappingURL=reports.controller.js.map