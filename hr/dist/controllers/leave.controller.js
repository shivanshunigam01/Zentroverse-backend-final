import * as leaveService from "../services/leave.service.js";
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
export async function listTypes(req, res) {
    const data = await leaveService.listLeaveTypes(requireAuth(req));
    return sendSuccess(res, { data });
}
export async function createType(req, res) {
    const data = await leaveService.createLeaveType(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Leave type created", data });
}
export async function updateType(req, res) {
    const data = await leaveService.updateLeaveType(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Leave type updated", data });
}
export async function listBalances(req, res) {
    const data = await leaveService.listBalances(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function previewLeave(req, res) {
    const data = await leaveService.previewLeave(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getCalendar(req, res) {
    const data = await leaveService.getLeaveCalendar(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function listRequests(req, res) {
    const data = await leaveService.listLeaveRequests(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function applyLeave(req, res) {
    const data = await leaveService.applyLeave(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Leave request submitted", data });
}
export async function getRequest(req, res) {
    const data = await leaveService.getLeaveRequest(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function cancelLeave(req, res) {
    const data = await leaveService.cancelLeave(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Leave request cancelled", data });
}
export async function approveLeave(req, res) {
    const data = await leaveService.approveLeave(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Leave approved", data });
}
export async function rejectLeave(req, res) {
    const data = await leaveService.rejectLeave(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Leave declined", data });
}
//# sourceMappingURL=leave.controller.js.map