import { HTTP_STATUS } from "../constants/http.js";
import * as careerService from "../services/career.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function routeParam(req, name) {
    const value = req.params[name];
    if (typeof value !== "string" || !value.trim()) {
        throw AppError.badRequest("Invalid identifier");
    }
    return value.trim();
}
export async function listCareerJobs(req, res) {
    const data = await careerService.listCareerJobs(routeParam(req, "orgSlug"), req.validatedQuery ?? {});
    return sendSuccess(res, { data });
}
export async function getCareerJob(req, res) {
    const data = await careerService.getCareerJob(routeParam(req, "orgSlug"), routeParam(req, "jobId"));
    return sendSuccess(res, { data });
}
export async function applyToCareerJob(req, res) {
    const data = await careerService.applyToCareerJob(routeParam(req, "orgSlug"), routeParam(req, "jobId"), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Application submitted",
        data,
    });
}
//# sourceMappingURL=career.controller.js.map