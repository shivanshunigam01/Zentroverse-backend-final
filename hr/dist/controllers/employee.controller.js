import { HTTP_STATUS } from "../constants/http.js";
import * as employeeService from "../services/employee.service.js";
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
function listQuery(req) {
    return req.validatedQuery;
}
export async function listEmployees(req, res) {
    const result = await employeeService.listEmployees(requireAuth(req), listQuery(req));
    return sendSuccess(res, { data: result });
}
export async function getMyEmployee(req, res) {
    const employee = await employeeService.getMyEmployee(requireAuth(req));
    return sendSuccess(res, { data: { employee } });
}
export async function getEmployee(req, res) {
    const employee = await employeeService.getEmployee(requireAuth(req), routeId(req));
    return sendSuccess(res, { data: { employee } });
}
export async function createEmployee(req, res) {
    const employee = await employeeService.createEmployee(requireAuth(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Employee created",
        data: { employee },
    });
}
export async function updateEmployee(req, res) {
    const employee = await employeeService.updateEmployee(requireAuth(req), routeId(req), req.body);
    return sendSuccess(res, {
        message: "Employee updated",
        data: { employee },
    });
}
export async function activateEmployee(req, res) {
    const employee = await employeeService.activateEmployee(requireAuth(req), routeId(req));
    return sendSuccess(res, {
        message: "Employee activated",
        data: { employee },
    });
}
export async function deactivateEmployee(req, res) {
    const employee = await employeeService.deactivateEmployee(requireAuth(req), routeId(req));
    return sendSuccess(res, {
        message: "Employee deactivated",
        data: { employee },
    });
}
//# sourceMappingURL=employee.controller.js.map