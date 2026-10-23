import * as jobApplicationService from "../services/job-application.service.js";
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
export async function listJobApplications(req, res) {
    const data = await jobApplicationService.listJobApplications(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getJobApplication(req, res) {
    const data = await jobApplicationService.getJobApplication(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { application: data } });
}
export async function updateJobApplication(req, res) {
    const data = await jobApplicationService.updateJobApplication(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Application updated", data: { application: data } });
}
//# sourceMappingURL=job-application.controller.js.map