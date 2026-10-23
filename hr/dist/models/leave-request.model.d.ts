import mongoose from "mongoose";
export declare const LeaveRequestModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "cancelled" | "rejected" | "pending" | "approved";
    reason: string;
    leaveTypeId: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    totalDays: number;
    attachment: string;
    approvalComment: string;
    approvedBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
