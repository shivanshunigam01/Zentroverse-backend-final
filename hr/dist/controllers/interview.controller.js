import { HTTP_STATUS } from "../constants/http.js";
import * as interviewService from "../services/interview.service.js";
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
export async function listInterviews(req, res) {
    const data = await interviewService.listInterviews(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getInterview(req, res) {
    const interview = await interviewService.getInterview(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { interview } });
}
export async function createInterview(req, res) {
    const interview = await interviewService.createInterview(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Interview scheduled",
        data: { interview },
    });
}
export async function updateInterview(req, res) {
    const interview = await interviewService.updateInterview(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Interview updated", data: { interview } });
}
export async function deleteInterview(req, res) {
    await interviewService.deleteInterview(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Interview deleted" });
}
//# sourceMappingURL=interview.controller.js.map