import { HTTP_STATUS } from "../constants/http.js";
import * as guaranteeService from "../services/guarantee.service.js";
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
export async function listGuarantees(req, res) {
    const data = await guaranteeService.listGuarantees(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getGuarantee(req, res) {
    const guarantee = await guaranteeService.getGuarantee(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { guarantee } });
}
export async function createGuarantee(req, res) {
    const guarantee = await guaranteeService.createGuarantee(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Guarantee tracking recorded",
        data: { guarantee },
    });
}
export async function updateGuarantee(req, res) {
    const guarantee = await guaranteeService.updateGuarantee(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Guarantee tracking updated", data: { guarantee } });
}
export async function deleteGuarantee(req, res) {
    await guaranteeService.deleteGuarantee(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Guarantee tracking deleted" });
}
//# sourceMappingURL=guarantee.controller.js.map