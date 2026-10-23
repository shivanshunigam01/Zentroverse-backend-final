import { HTTP_STATUS } from "../constants/http.js";
import * as joiningService from "../services/joining.service.js";
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
export async function listJoinings(req, res) {
    const data = await joiningService.listJoinings(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getJoining(req, res) {
    const joining = await joiningService.getJoining(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { joining } });
}
export async function createJoining(req, res) {
    const joining = await joiningService.createJoining(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Joining recorded",
        data: { joining },
    });
}
export async function updateJoining(req, res) {
    const joining = await joiningService.updateJoining(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Joining updated", data: { joining } });
}
export async function deleteJoining(req, res) {
    await joiningService.deleteJoining(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Joining deleted" });
}
//# sourceMappingURL=joining.controller.js.map