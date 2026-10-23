import { HTTP_STATUS } from "../constants/http.js";
import * as followUpService from "../services/follow-up.service.js";
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
export async function listFollowUps(req, res) {
    const data = await followUpService.listFollowUps(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getFollowUp(req, res) {
    const followUp = await followUpService.getFollowUp(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { followUp } });
}
export async function createFollowUp(req, res) {
    const followUp = await followUpService.createFollowUp(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Follow-up recorded",
        data: { followUp },
    });
}
export async function updateFollowUp(req, res) {
    const followUp = await followUpService.updateFollowUp(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Follow-up updated", data: { followUp } });
}
export async function deleteFollowUp(req, res) {
    await followUpService.deleteFollowUp(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Follow-up deleted" });
}
//# sourceMappingURL=follow-up.controller.js.map