import mongoose from "mongoose";
export declare const ActivityModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
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
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    title: string;
    detail: string;
    tone: "default" | "success" | "warning" | "brand" | "muted";
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
