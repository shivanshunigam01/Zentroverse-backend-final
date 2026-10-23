import mongoose from "mongoose";
export declare const AIInterviewConfigModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
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
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    passingScore: number;
    interviewExpiryHours: number;
    autoTriggerOnApply: boolean;
    interviewMode: "TEXT" | "VOICE" | "BOTH";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
