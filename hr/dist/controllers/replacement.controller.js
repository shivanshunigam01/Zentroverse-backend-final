import { HTTP_STATUS } from "../constants/http.js";
import * as replacementService from "../services/replacement.service.js";
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
export async function listReplacements(req, res) {
    const data = await replacementService.listReplacements(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getReplacement(req, res) {
    const replacement = await replacementService.getReplacement(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { replacement } });
}
export async function createReplacement(req, res) {
    const replacement = await replacementService.createReplacement(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Replacement case recorded",
        data: { replacement },
    });
}
export async function updateReplacement(req, res) {
    const replacement = await replacementService.updateReplacement(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Replacement case updated", data: { replacement } });
}
export async function deleteReplacement(req, res) {
    await replacementService.deleteReplacement(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Replacement case deleted" });
}
//# sourceMappingURL=replacement.controller.js.map