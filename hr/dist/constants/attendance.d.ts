export declare const ATTENDANCE_STATUSES: readonly ["present", "absent", "late", "half_day", "wfh", "holiday", "leave"];
export type AttendanceStatus = (typeof ATTENDANCE_STATUSES)[number];
export declare const PRESENT_LIKE_STATUSES: readonly ["present", "late", "half_day", "wfh"];
export type PresentLikeStatus = (typeof PRESENT_LIKE_STATUSES)[number];
export declare const ATTENDANCE_SESSION_STATUSES: readonly ["not_started", "working", "on_break", "checked_out", "on_leave", "holiday"];
export type AttendanceSessionStatus = (typeof ATTENDANCE_SESSION_STATUSES)[number];
export declare const LATE_GRACE_MINUTES = 10;
export declare const HALF_DAY_RATIO = 0.5;
