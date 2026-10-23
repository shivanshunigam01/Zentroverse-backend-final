import * as performanceService from "../services/performance.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireAuth(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth;
}
function routeId(req, key = "id") {
    const id = req.params[key];
    if (typeof id !== "string") {
        throw AppError.badRequest("Invalid identifier");
    }
    return id;
}
export async function getOverview(req, res) {
    const data = await performanceService.getOverview(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function listGoals(req, res) {
    const data = await performanceService.listGoals(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getGoal(req, res) {
    const data = await performanceService.getGoal(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createGoal(req, res) {
    const data = await performanceService.createGoal(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Goal created", data });
}
export async function updateGoal(req, res) {
    const data = await performanceService.updateGoal(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Goal updated", data });
}
export async function updateGoalProgress(req, res) {
    const data = await performanceService.updateGoalProgress(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Progress updated", data });
}
export async function deleteGoal(req, res) {
    await performanceService.deleteGoal(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Goal deleted" });
}
export async function listReviews(req, res) {
    const data = await performanceService.listReviews(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getReview(req, res) {
    const data = await performanceService.getReview(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createReview(req, res) {
    const data = await performanceService.createReview(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Review saved", data });
}
export async function updateReview(req, res) {
    const data = await performanceService.updateReview(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Review updated", data });
}
export async function submitReview(req, res) {
    const data = await performanceService.submitReview(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Review submitted", data });
}
//# sourceMappingURL=performance.controller.js.map