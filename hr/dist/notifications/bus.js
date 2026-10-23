import { EventEmitter } from "node:events";
import { deliverNotification } from "./transport.js";
/**
 * In-process fan-out for created notifications.
 * Socket.io (later) should listen for `notification.created` or replace the transport.
 */
class NotificationBus extends EventEmitter {
    emitCreated(notification) {
        this.emit("notification.created", notification);
    }
}
export const notificationBus = new NotificationBus();
notificationBus.on("notification.created", (notification) => {
    deliverNotification(notification);
});
//# sourceMappingURL=bus.js.map