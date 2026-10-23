import mongoose from "mongoose";
export declare const AttendanceModel: mongoose.Model<{
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    date: NativeDate;
    organizationId: mongoose.Types.ObjectId;
    source: "hr" | "self" | "system";
    employeeId: mongoose.Types.ObjectId;
    status: "leave" | "present" | "absent" | "late" | "half_day" | "wfh" | "holiday";
    notes: string;
    breakMinutes: number;
    workingMinutes: number;
    overtimeMinutes: number;
    checkIn?: NativeDate | null | undefined;
    checkOut?: NativeDate | null | undefined;
    breakStartedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
