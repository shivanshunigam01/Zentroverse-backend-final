import { HTTP_STATUS } from "../constants/http.js";
import * as agreementService from "../services/agreement.service.js";
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
export async function listAgreements(req, res) {
    const data = await agreementService.listAgreements(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAgreement(req, res) {
    const agreement = await agreementService.getAgreement(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { agreement } });
}
export async function createAgreement(req, res) {
    const agreement = await agreementService.createAgreement(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Agreement created",
        data: { agreement },
    });
}
export async function updateAgreement(req, res) {
    const agreement = await agreementService.updateAgreement(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Agreement updated", data: { agreement } });
}
export async function deleteAgreement(req, res) {
    await agreementService.deleteAgreement(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Agreement deleted" });
}
//# sourceMappingURL=agreement.controller.js.map