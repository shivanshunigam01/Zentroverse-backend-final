import { HTTP_STATUS } from "../constants/http.js";
import * as mandateService from "../services/mandate.service.js";
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
export async function listMandates(req, res) {
    const data = await mandateService.listMandates(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getMandate(req, res) {
    const mandate = await mandateService.getMandate(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { mandate } });
}
export async function createMandate(req, res) {
    const mandate = await mandateService.createMandate(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Mandate created",
        data: { mandate },
    });
}
export async function updateMandate(req, res) {
    const mandate = await mandateService.updateMandate(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Mandate updated", data: { mandate } });
}
export async function deleteMandate(req, res) {
    await mandateService.deleteMandate(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Mandate deleted" });
}
//# sourceMappingURL=mandate.controller.js.map