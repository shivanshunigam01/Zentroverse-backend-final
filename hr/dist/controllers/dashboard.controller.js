import * as dashboardService from "../services/dashboard.service.js";
import * as recruitmentDashboardService from "../services/recruitment-dashboard.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
export async function getDashboard(req, res) {
    const dashboard = await dashboardService.getDashboard(requireAuth(req));
    return sendSuccess(res, { data: dashboard });
}
export async function getRecruitmentDashboard(req, res) {
    const dashboard = await recruitmentDashboardService.getRecruitmentDashboard(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data: dashboard });
}
//# sourceMappingURL=dashboard.controller.js.map