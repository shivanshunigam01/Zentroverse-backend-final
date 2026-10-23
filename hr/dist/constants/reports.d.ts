export declare const REPORT_TYPES: readonly ["employee-growth", "attendance", "leave", "department", "recruitment", "payroll"];
export type ReportType = (typeof REPORT_TYPES)[number];
export declare const REPORT_MAX_RANGE_DAYS = 731;
export declare const ATTENDANCE_DAILY_MAX_DAYS = 62;
