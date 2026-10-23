import * as recruitmentService from "../services/recruitment.service.js";
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
export async function listJobs(req, res) {
    const data = await recruitmentService.listJobs(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getJob(req, res) {
    const data = await recruitmentService.getJob(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createJob(req, res) {
    const data = await recruitmentService.createJob(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Job created", data });
}
export async function updateJob(req, res) {
    const data = await recruitmentService.updateJob(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Job updated", data });
}
export async function deleteJob(req, res) {
    await recruitmentService.deleteJob(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Job deleted" });
}
export async function listCandidates(req, res) {
    const data = await recruitmentService.listCandidates(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getCandidate(req, res) {
    const data = await recruitmentService.getCandidate(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createCandidate(req, res) {
    const data = await recruitmentService.createCandidate(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Candidate added", data });
}
export async function updateCandidate(req, res) {
    const data = await recruitmentService.updateCandidate(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Candidate updated", data });
}
export async function listApplications(req, res) {
    const data = await recruitmentService.listApplications(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getApplication(req, res) {
    const data = await recruitmentService.getApplication(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createApplication(req, res) {
    const data = await recruitmentService.createApplication(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Application created", data });
}
export async function updateApplication(req, res) {
    const data = await recruitmentService.updateApplication(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Application updated", data });
}
export async function getBoard(req, res) {
    const data = await recruitmentService.getBoard(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
//# sourceMappingURL=recruitment.controller.js.map