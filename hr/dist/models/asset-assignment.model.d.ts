import mongoose from "mongoose";
export declare const AssetAssignmentModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
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
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    status: "active" | "returned";
    notes: string;
    assetId: mongoose.Types.ObjectId;
    assignedDate: NativeDate;
    assignedBy: mongoose.Types.ObjectId;
    returnedDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
