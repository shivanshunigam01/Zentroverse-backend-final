import mongoose from "mongoose";
export declare const LeaveBalanceModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
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
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    total: number;
    leaveTypeId: mongoose.Types.ObjectId;
    used: number;
    remaining: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
