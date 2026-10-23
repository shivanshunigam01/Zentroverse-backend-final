import * as pipelineService from "../services/pipeline.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
export async function getMandatePipeline(req, res) {
    const data = await pipelineService.getMandatePipeline(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function transitionPipelineStage(req, res) {
    const data = await pipelineService.transitionPipelineStage(requireAuth(req), req.body);
    return sendSuccess(res, { message: data.message, data });
}
//# sourceMappingURL=pipeline.controller.js.map