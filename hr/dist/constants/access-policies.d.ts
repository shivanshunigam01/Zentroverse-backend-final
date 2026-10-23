import { type Permission } from "./permissions.js";
export type ResourcePolicy = {
    read: Permission[];
    manage: Permission[];
    create?: Permission[];
    selfRead?: Permission[];
    approve?: Permission[];
};
export declare const RESOURCE_POLICIES: {
    readonly employees: {
        readonly read: ["employees:read", "employees:read_team"];
        readonly manage: ["employees:manage"];
        readonly selfRead: ["employees:read_self"];
    };
    readonly departments: {
        readonly read: ["departments:read"];
        readonly manage: ["departments:manage"];
    };
    readonly designations: {
        readonly read: ["designations:read"];
        readonly manage: ["designations:manage"];
    };
    readonly attendance: {
        readonly read: ["attendance:read", "attendance:read_team"];
        readonly manage: ["attendance:manage"];
        readonly selfRead: ["attendance:read_self"];
    };
    readonly leave: {
        readonly read: ["leave:read", "leave:read_team", "leave:approve_team"];
        readonly manage: ["leave:manage"];
        readonly create: ["leave:create_self", "leave:manage"];
        readonly selfRead: ["leave:read_self", "leave:create_self"];
        readonly approve: ["leave:approve_team", "leave:manage"];
    };
    readonly documents: {
        readonly read: ["documents:read"];
        readonly manage: ["documents:manage"];
        readonly selfRead: ["documents:read_self"];
    };
    readonly assets: {
        readonly read: ["assets:read"];
        readonly manage: ["assets:manage"];
        readonly selfRead: ["assets:read_self"];
    };
    readonly announcements: {
        readonly read: ["announcements:read"];
        readonly manage: ["announcements:manage"];
    };
    readonly payroll: {
        readonly read: ["payroll:read"];
        readonly manage: ["payroll:manage"];
        readonly selfRead: ["payroll:read_self"];
    };
    readonly recruitment: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly clients: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly agreements: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly mandates: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly candidates: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly consents: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly evaluations: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly submissions: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly interviews: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly offers: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly followUps: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly joinings: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly invoices: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly payments: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly guarantees: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly replacements: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly auditLogs: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly recruitmentDashboard: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly pipeline: {
        readonly read: ["recruitment:read"];
        readonly manage: ["recruitment:manage"];
    };
    readonly performance: {
        readonly read: ["performance:read", "performance:read_team"];
        readonly manage: ["performance:manage"];
        readonly selfRead: ["performance:read_self"];
    };
    readonly reports: {
        readonly read: ["reports:read"];
        readonly manage: ["reports:read"];
    };
};
