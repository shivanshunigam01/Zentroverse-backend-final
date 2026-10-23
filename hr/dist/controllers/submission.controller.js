import { HTTP_STATUS } from "../constants/http.js";
import * as submissionService from "../services/submission.service.js";
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
export async function listSubmissions(req, res) {
    const data = await submissionService.listSubmissions(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getSubmission(req, res) {
    const submission = await submissionService.getSubmission(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { submission } });
}
export async function createSubmission(req, res) {
    const submission = await submissionService.createSubmission(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Submission recorded",
        data: { submission },
    });
}
export async function updateSubmission(req, res) {
    const submission = await submissionService.updateSubmission(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Submission updated", data: { submission } });
}
export async function deleteSubmission(req, res) {
    await submissionService.deleteSubmission(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Submission deleted" });
}
//# sourceMappingURL=submission.controller.js.map