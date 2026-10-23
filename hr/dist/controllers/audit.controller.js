import * as auditService from "../services/audit.service.js";
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
export async function listAuditLogs(req, res) {
    const data = await auditService.listAuditLogs(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAuditLog(req, res) {
    const auditLog = await auditService.getAuditLog(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { auditLog } });
}
//# sourceMappingURL=audit.controller.js.map