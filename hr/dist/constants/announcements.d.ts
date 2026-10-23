export declare const ANNOUNCEMENT_CATEGORIES: readonly ["general", "event", "policy", "important", "celebration"];
export type AnnouncementCategory = (typeof ANNOUNCEMENT_CATEGORIES)[number];
export declare const ANNOUNCEMENT_PRIORITIES: readonly ["normal", "high", "urgent"];
export type AnnouncementPriority = (typeof ANNOUNCEMENT_PRIORITIES)[number];
export declare const ANNOUNCEMENT_VISIBILITIES: readonly ["draft", "scheduled", "live", "expired"];
export type AnnouncementVisibility = (typeof ANNOUNCEMENT_VISIBILITIES)[number];
