import { MESSAGES } from "../constants/messages.js";
import { NotificationModel } from "../models/notification.model.js";
import { toPublicNotification } from "../notifications/notify.js";
import { AppError } from "../utils/app-error.js";
import { parseObjectId } from "../utils/object-id.js";
import { paginationMeta, paginationSkip } from "../utils/pagination.js";
import { applySearch, mongoSort, resolvedSearch } from "../utils/search.js";
export async function listNotifications(auth, query) {
    const filter = {
        userId: auth.userId,
        organizationId: auth.organizationId,
    };
    if (query.type)
        filter.type = query.type;
    if (query.isRead !== undefined)
        filter.isRead = query.isRead;
    applySearch(filter, ["title", "message"], resolvedSearch(query));
    const pagination = { page: query.page, limit: query.limit };
    const [items, total, unreadCount] = await Promise.all([
        NotificationModel.find(filter)
            .sort(mongoSort(query, { createdAt: -1 }))
            .skip(paginationSkip(pagination))
            .limit(pagination.limit)
            .lean(),
        NotificationModel.countDocuments(filter),
        NotificationModel.countDocuments({
            userId: auth.userId,
            organizationId: auth.organizationId,
            isRead: false,
        }),
    ]);
    return {
        items: items.map((item) => toPublicNotification(item)),
        unreadCount,
        ...paginationMeta(total, pagination),
    };
}
export async function unreadNotificationCount(auth) {
    const unreadCount = await NotificationModel.countDocuments({
        userId: auth.userId,
        organizationId: auth.organizationId,
        isRead: false,
    });
    return { unreadCount };
}
export async function markNotificationRead(auth, id) {
    parseObjectId(id);
    const row = await NotificationModel.findOneAndUpdate({ _id: id, userId: auth.userId, organizationId: auth.organizationId }, { $set: { isRead: true } }, { new: true }).lean();
    if (!row) {
        throw AppError.notFound(MESSAGES.NOT_FOUND);
    }
    return toPublicNotification(row);
}
export async function markAllNotificationsRead(auth) {
    const result = await NotificationModel.updateMany({ userId: auth.userId, organizationId: auth.organizationId, isRead: false }, { $set: { isRead: true } });
    return { updated: result.modifiedCount };
}
export async function deleteNotification(auth, id) {
    parseObjectId(id);
    const row = await NotificationModel.findOneAndDelete({
        _id: id,
        userId: auth.userId,
        organizationId: auth.organizationId,
    });
    if (!row) {
        throw AppError.notFound(MESSAGES.NOT_FOUND);
    }
}
//# sourceMappingURL=notification.service.js.map