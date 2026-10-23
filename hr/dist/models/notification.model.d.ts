import mongoose from "mongoose";
export declare const NotificationModel: mongoose.Model<{
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "leave" | "attendance" | "announcement" | "document" | "payroll" | "system";
    message: string;
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    link: string;
    metadata: any;
    title: string;
    isRead: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
