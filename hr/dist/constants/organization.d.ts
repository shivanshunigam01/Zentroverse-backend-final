export declare const WEEKDAYS: readonly ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
export type Weekday = (typeof WEEKDAYS)[number];
export declare const COMPANY_SIZES: readonly ["1-10", "11-50", "51-200", "201-500", "500+"];
export type CompanySize = (typeof COMPANY_SIZES)[number];
export declare const DATE_FORMATS: readonly ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"];
export declare const DEFAULT_WORKING_DAYS: Weekday[];
export declare const DEFAULT_WORKING_HOURS: {
    readonly start: "09:00";
    readonly end: "18:00";
};
export declare const TIME_PATTERN: RegExp;
