import { EventEmitter } from "node:events";
import type { PublicNotification } from "./types.js";
/**
 * In-process fan-out for created notifications.
 * Socket.io (later) should listen for `notification.created` or replace the transport.
 */
declare class NotificationBus extends EventEmitter {
    emitCreated(notification: PublicNotification): void;
}
export declare const notificationBus: NotificationBus;
export {};
