import * as payrollService from "../services/payroll.service.js";
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
export async function listPayrolls(req, res) {
    const data = await payrollService.listPayrolls(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function previewPayroll(req, res) {
    const data = await payrollService.previewPayroll(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function generatePayroll(req, res) {
    const data = await payrollService.generatePayroll(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Payroll generated", data });
}
export async function getPayroll(req, res) {
    const data = await payrollService.getPayroll(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function getPayslip(req, res) {
    const data = await payrollService.getPayslip(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function markPayrollPaid(req, res) {
    const data = await payrollService.markPayrollPaid(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Payroll marked as paid", data });
}
export async function listSalaryStructures(req, res) {
    const data = await payrollService.listSalaryStructures(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function getSalaryStructure(req, res) {
    const data = await payrollService.getSalaryStructure(requireAuth(req), routeId(req));
    return sendSuccess(res, { data });
}
export async function createSalaryStructure(req, res) {
    const data = await payrollService.createSalaryStructure(requireAuth(req), req.body);
    return sendSuccess(res, { message: "Salary structure saved", data });
}
export async function updateSalaryStructure(req, res) {
    const data = await payrollService.updateSalaryStructure(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, { message: "Salary structure updated", data });
}
//# sourceMappingURL=payroll.controller.js.map