import { type UserRole } from "../constants/roles.js";
export declare function notifyLeaveSubmitted(input: {
    organizationId: string;
    actorUserId: string;
    employeeName: string;
    managerId?: unknown;
    leaveTypeName: string;
    range: string;
    requestId: string;
}): Promise<void>;
export declare function notifyLeaveDecided(input: {
    organizationId: string;
    actorUserId: string;
    employeeUserId?: unknown;
    approved: boolean;
    leaveTypeName: string;
    range: string;
    requestId: string;
}): Promise<void>;
export declare function notifyAnnouncementPublished(input: {
    organizationId: string;
    actorUserId: string;
    announcementId: string;
    title: string;
    excerpt: string;
    targetAudience: UserRole[];
}): Promise<void>;
export declare function notifyDocumentExpiry(input: {
    organizationId: string;
    employeeUserId?: unknown;
    documentId: string;
    name: string;
    expiryLabel: string;
    expired: boolean;
}): Promise<void>;
export declare function notifyExpiringDocuments(organizationId: string): Promise<void>;
export declare function notifyPayslipsGenerated(input: {
    organizationId: string;
    periodLabel: string;
    slips: {
        userId: string;
        payrollId: string;
    }[];
}): Promise<void>;
export declare function notifyAttendanceLate(input: {
    organizationId: string;
    actorUserId: string;
    employeeName: string;
    managerId?: unknown;
    timeLabel: string;
}): Promise<void>;
