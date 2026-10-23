import mongoose from "mongoose";
export declare const ApplicationModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
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
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    candidateId: mongoose.Types.ObjectId;
    notes: string;
    jobId: mongoose.Types.ObjectId;
    stage: "applied" | "screening" | "interview" | "technical" | "hr_round" | "hired" | "rejected";
    appliedDate: NativeDate;
    sortOrder: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
