import mongoose from "mongoose";
import type { AuthContext } from "../types/auth.js";
import type { ApplyLeaveInput, CreateLeaveTypeInput, DecideLeaveInput, LeaveBalanceQueryInput, LeaveCalendarQueryInput, LeaveListQueryInput, LeavePreviewQueryInput, UpdateLeaveTypeInput } from "../validators/leave.validators.js";
export declare function ensureLeaveTypes(organizationId: string): Promise<({
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    isActive: boolean;
    maxDays: number;
    isPaid: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>)[]>;
export declare function ensureEmployeeLeaveBalances(organizationId: string, employeeId: string, year: number): Promise<void>;
export declare function listLeaveTypes(auth: AuthContext): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    maxDays: number;
    isPaid: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}[]>;
export declare function createLeaveType(auth: AuthContext, input: CreateLeaveTypeInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    maxDays: number;
    isPaid: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateLeaveType(auth: AuthContext, id: string, input: UpdateLeaveTypeInput): Promise<{
    id: string;
    organizationId: string;
    name: string;
    code: string;
    maxDays: number;
    isPaid: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}>;
export declare function listBalances(auth: AuthContext, query: LeaveBalanceQueryInput): Promise<{
    year: number;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    };
    items: {
        id: string;
        leaveType: {
            id: string;
            name: string;
            code: string;
            isPaid: boolean;
            maxDays: number;
        };
        year: number;
        total: number;
        used: number;
        remaining: number;
        pending: number;
        available: number;
    }[];
}>;
export declare function previewLeave(auth: AuthContext, query: LeavePreviewQueryInput): Promise<{
    timezone: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    range: string;
    from: string;
    to: string;
}>;
export declare function applyLeave(auth: AuthContext, input: ApplyLeaveInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    leaveTypeId: string;
    leaveType: {
        id: string;
        name: string;
        code: string;
        isPaid: boolean;
    } | null;
    startDate: string;
    endDate: string;
    range: string;
    totalDays: number;
    reason: string;
    attachment: string;
    status: string;
    approvedBy: {
        id: string;
        name: string;
    } | null;
    approvalComment: string;
    createdAt: string;
    updatedAt: string;
    timezone: string;
}>;
export declare function listLeaveRequests(auth: AuthContext, query: LeaveListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    timezone: string;
    items: {
        id: string;
        organizationId: string;
        employeeId: string;
        employee: {
            id: string;
            name: string;
            initials: string;
            profileImage: string;
            employeeCode: string;
            department: string | null;
        } | null;
        leaveTypeId: string;
        leaveType: {
            id: string;
            name: string;
            code: string;
            isPaid: boolean;
        } | null;
        startDate: string;
        endDate: string;
        range: string;
        totalDays: number;
        reason: string;
        attachment: string;
        status: string;
        approvedBy: {
            id: string;
            name: string;
        } | null;
        approvalComment: string;
        createdAt: string;
        updatedAt: string;
        timezone: string;
    }[];
}>;
export declare function getLeaveRequest(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    leaveTypeId: string;
    leaveType: {
        id: string;
        name: string;
        code: string;
        isPaid: boolean;
    } | null;
    startDate: string;
    endDate: string;
    range: string;
    totalDays: number;
    reason: string;
    attachment: string;
    status: string;
    approvedBy: {
        id: string;
        name: string;
    } | null;
    approvalComment: string;
    createdAt: string;
    updatedAt: string;
    timezone: string;
}>;
export declare function cancelLeave(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    leaveTypeId: string;
    leaveType: {
        id: string;
        name: string;
        code: string;
        isPaid: boolean;
    } | null;
    startDate: string;
    endDate: string;
    range: string;
    totalDays: number;
    reason: string;
    attachment: string;
    status: string;
    approvedBy: {
        id: string;
        name: string;
    } | null;
    approvalComment: string;
    createdAt: string;
    updatedAt: string;
    timezone: string;
}>;
export declare function approveLeave(auth: AuthContext, id: string, input: DecideLeaveInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    leaveTypeId: string;
    leaveType: {
        id: string;
        name: string;
        code: string;
        isPaid: boolean;
    } | null;
    startDate: string;
    endDate: string;
    range: string;
    totalDays: number;
    reason: string;
    attachment: string;
    status: string;
    approvedBy: {
        id: string;
        name: string;
    } | null;
    approvalComment: string;
    createdAt: string;
    updatedAt: string;
    timezone: string;
}>;
export declare function rejectLeave(auth: AuthContext, id: string, input: DecideLeaveInput): Promise<{
    id: string;
    organizationId: string;
    employeeId: string;
    employee: {
        id: string;
        name: string;
        initials: string;
        profileImage: string;
        employeeCode: string;
        department: string | null;
    } | null;
    leaveTypeId: string;
    leaveType: {
        id: string;
        name: string;
        code: string;
        isPaid: boolean;
    } | null;
    startDate: string;
    endDate: string;
    range: string;
    totalDays: number;
    reason: string;
    attachment: string;
    status: string;
    approvedBy: {
        id: string;
        name: string;
    } | null;
    approvalComment: string;
    createdAt: string;
    updatedAt: string;
    timezone: string;
}>;
export declare function getLeaveCalendar(auth: AuthContext, query: LeaveCalendarQueryInput): Promise<{
    month: string;
    timezone: string;
    weekStartsOn: string;
    today: string;
    days: {
        date: string;
        isToday: boolean;
        isWorkingDay: boolean;
        holiday: string | null;
        items: {
            id: string;
            name: string;
            status: string;
            type: string;
            isMine: boolean;
        }[];
    }[];
}>;
