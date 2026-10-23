import { HTTP_STATUS } from "../constants/http.js";
import * as aiInterviewService from "../services/ai-interview.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth)
        throw AppError.unauthorized();
    return req.auth;
}
function routeId(req) {
    const id = req.params.id;
    if (typeof id !== "string")
        throw AppError.badRequest("Invalid identifier");
    return id;
}
function routeToken(req) {
    const token = req.params.token;
    if (typeof token !== "string")
        throw AppError.badRequest("Invalid token");
    return token;
}
export async function listAiInterviews(req, res) {
    const data = await aiInterviewService.listAiInterviews(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getAiInterview(req, res) {
    const interview = await aiInterviewService.getAiInterview(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { interview } });
}
export async function createAiInterviewForApplication(req, res) {
    const interview = await aiInterviewService.createAiInterviewForApplicationId(requireAuth(req), routeId(req));
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "AI interview created",
        data: { interview },
    });
}
export async function resendAiInterviewInvitation(req, res) {
    const interview = await aiInterviewService.resendAiInterviewInvitation(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Invitation resent", data: { interview } });
}
export async function regenerateAiInterviewLink(req, res) {
    const interview = await aiInterviewService.regenerateAiInterviewLink(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Interview link regenerated", data: { interview } });
}
export async function overrideAiInterviewResult(req, res) {
    const interview = await aiInterviewService.overrideAiInterviewResult(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Result overridden", data: { interview } });
}
export async function getAiInterviewConfig(req, res) {
    const config = await aiInterviewService.getAiInterviewConfig(requireAuth(req));
    return sendSuccess(res, { data: { config } });
}
export async function updateAiInterviewConfig(req, res) {
    const config = await aiInterviewService.updateAiInterviewConfig(requireAuth(req), req.body);
    return sendSuccess(res, { message: "AI interview settings updated", data: { config } });
}
export async function getPublicAiInterview(req, res) {
    const data = await aiInterviewService.getAiInterviewByToken(routeToken(req));
    return sendSuccess(res, { data });
}
export async function startPublicAiInterview(req, res) {
    const data = await aiInterviewService.startAiInterview(routeToken(req));
    return sendSuccess(res, { message: "Interview started", data });
}
export async function submitPublicAiInterviewAnswer(req, res) {
    const data = await aiInterviewService.submitAiInterviewAnswer(routeToken(req), req.body);
    return sendSuccess(res, { message: "Answer submitted", data });
}
export async function completePublicAiInterview(req, res) {
    const data = await aiInterviewService.completeAiInterview(routeToken(req));
    return sendSuccess(res, { message: "Interview completed", data });
}
//# sourceMappingURL=ai-interview.controller.js.map