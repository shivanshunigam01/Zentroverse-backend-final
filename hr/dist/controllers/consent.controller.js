import { HTTP_STATUS } from "../constants/http.js";
import * as consentService from "../services/consent.service.js";
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
export async function listConsents(req, res) {
    const data = await consentService.listConsents(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getConsent(req, res) {
    const consent = await consentService.getConsent(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { consent } });
}
export async function createConsent(req, res) {
    const consent = await consentService.createConsent(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Consent recorded",
        data: { consent },
    });
}
export async function updateConsent(req, res) {
    const consent = await consentService.updateConsent(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Consent updated", data: { consent } });
}
export async function deleteConsent(req, res) {
    await consentService.deleteConsent(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Consent deleted" });
}
//# sourceMappingURL=consent.controller.js.map