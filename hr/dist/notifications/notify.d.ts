import type { NotifyInput, PublicNotification } from "./types.js";
export declare function toPublicNotification(doc: Record<string, unknown>): PublicNotification;
export declare function notify(input: NotifyInput): Promise<PublicNotification | null>;
export declare function notifyMany(userIds: string[], shared: Omit<NotifyInput, "userId">): Promise<PublicNotification[]>;
export declare function notifyOnce(input: NotifyInput & {
    metadata: {
        dedupeKey: string;
    };
}): Promise<PublicNotification | null>;
