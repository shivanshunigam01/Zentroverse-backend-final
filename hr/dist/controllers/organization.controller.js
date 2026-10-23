import { HTTP_STATUS } from "../constants/http.js";
import * as organizationService from "../services/organization.service.js";
import { AppError } from "../utils/app-error.js";
import { sendSuccess } from "../utils/api-response.js";
function requireOrgId(req) {
    if (!req.auth) {
        throw AppError.unauthorized();
    }
    return req.auth.organizationId;
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
export async function getOrganization(req, res) {
    const organization = await organizationService.getOrganization(requireOrgId(req));
    return sendSuccess(res, { data: { organization } });
}
export async function updateOrganization(req, res) {
    const organization = await organizationService.updateOrganization(requireOrgId(req), req.body);
    return sendSuccess(res, {
        message: "Organization updated",
        data: { organization },
    });
}
export async function listMembers(req, res) {
    const members = await organizationService.listMembers(requireOrgId(req));
    return sendSuccess(res, { data: { items: members } });
}
export async function listDepartments(req, res) {
    const result = await organizationService.listDepartments(requireOrgId(req), listQuery(req));
    return sendSuccess(res, { data: result });
}
export async function getDepartment(req, res) {
    const department = await organizationService.getDepartment(requireOrgId(req), routeId(req));
    return sendSuccess(res, { data: { department } });
}
export async function createDepartment(req, res) {
    const department = await organizationService.createDepartment(requireOrgId(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Department created",
        data: { department },
    });
}
export async function updateDepartment(req, res) {
    const department = await organizationService.updateDepartment(requireOrgId(req), routeId(req), req.body);
    return sendSuccess(res, {
        message: "Department updated",
        data: { department },
    });
}
export async function deleteDepartment(req, res) {
    await organizationService.deleteDepartment(requireOrgId(req), routeId(req));
    return sendSuccess(res, { message: "Department deleted" });
}
export async function listDesignations(req, res) {
    const result = await organizationService.listDesignations(requireOrgId(req), listQuery(req));
    return sendSuccess(res, { data: result });
}
export async function getDesignation(req, res) {
    const designation = await organizationService.getDesignation(requireOrgId(req), routeId(req));
    return sendSuccess(res, { data: { designation } });
}
export async function createDesignation(req, res) {
    const designation = await organizationService.createDesignation(requireOrgId(req), req.body);
    return sendSuccess(res, {
        statusCode: HTTP_STATUS.CREATED,
        message: "Designation created",
        data: { designation },
    });
}
export async function updateDesignation(req, res) {
    const designation = await organizationService.updateDesignation(requireOrgId(req), routeId(req), req.body);
    return sendSuccess(res, {
        message: "Designation updated",
        data: { designation },
    });
}
export async function deleteDesignation(req, res) {
    await organizationService.deleteDesignation(requireOrgId(req), routeId(req));
    return sendSuccess(res, { message: "Designation deleted" });
}
//# sourceMappingURL=organization.controller.js.map