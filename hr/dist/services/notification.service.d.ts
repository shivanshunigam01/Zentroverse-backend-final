import type { AuthContext } from "../types/auth.js";
import type { NotificationListQueryInput } from "../validators/notification.validators.js";
export declare function listNotifications(auth: AuthContext, query: NotificationListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: import("../notifications/types.js").PublicNotification[];
    unreadCount: number;
}>;
export declare function unreadNotificationCount(auth: AuthContext): Promise<{
    unreadCount: number;
}>;
export declare function markNotificationRead(auth: AuthContext, id: string): Promise<import("../notifications/types.js").PublicNotification>;
export declare function markAllNotificationsRead(auth: AuthContext): Promise<{
    updated: number;
}>;
export declare function deleteNotification(auth: AuthContext, id: string): Promise<void>;
