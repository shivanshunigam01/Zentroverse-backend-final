import * as notificationService from "../services/notification.service.js";
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
export async function listNotifications(req, res) {
    const data = await notificationService.listNotifications(requireAuth(req), req.validatedQuery);
    return sendSuccess(res, { data });
}
export async function unreadNotificationCount(req, res) {
    const data = await notificationService.unreadNotificationCount(requireAuth(req));
    return sendSuccess(res, { data });
}
export async function markNotificationRead(req, res) {
    const data = await notificationService.markNotificationRead(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Notification marked as read", data });
}
export async function markAllNotificationsRead(req, res) {
    const data = await notificationService.markAllNotificationsRead(requireAuth(req));
    return sendSuccess(res, { message: "Notifications marked as read", data });
}
export async function deleteNotification(req, res) {
    await notificationService.deleteNotification(requireAuth(req), routeId(req));
    return sendSuccess(res, { message: "Notification deleted" });
}
//# sourceMappingURL=notification.controller.js.map