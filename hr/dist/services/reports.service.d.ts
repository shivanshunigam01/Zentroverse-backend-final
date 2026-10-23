import type { AuthContext } from "../types/auth.js";
import type { ReportQueryInput } from "../validators/reports.validators.js";
type ReportMetric = {
    label: string;
    value: string;
    hint?: string;
};
type SeriesKey = {
    key: string;
    name: string;
};
type ChartPoint = Record<string, string | number>;
type NamedValue = {
    name: string;
    value: number;
};
type TableColumn = {
    key: string;
    label: string;
    align?: "left" | "right";
};
type TableRow = Record<string, string | number | null>;
export type ReportPayload = {
    range: {
        from: string;
        to: string;
        fromLabel: string;
        toLabel: string;
    };
    metrics: ReportMetric[];
    line?: {
        title: string;
        description?: string;
        keys: SeriesKey[];
        points: ChartPoint[];
    };
    bar?: {
        title: string;
        description?: string;
        keys: SeriesKey[];
        points: ChartPoint[];
        layout?: "horizontal" | "vertical";
    };
    pie?: {
        title: string;
        description?: string;
        items: NamedValue[];
    };
    table: {
        title: string;
        columns: TableColumn[];
        rows: TableRow[];
    };
};
export declare function employeeGrowthReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export declare function attendanceReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export declare function leaveReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export declare function departmentReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export declare function recruitmentReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export declare function payrollReport(auth: AuthContext, query: ReportQueryInput): Promise<ReportPayload>;
export {};
