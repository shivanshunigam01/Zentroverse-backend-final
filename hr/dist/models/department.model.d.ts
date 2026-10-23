import mongoose from "mongoose";
export declare const DepartmentModel: mongoose.Model<{
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    code: string;
    name: string;
    organizationId: mongoose.Types.ObjectId;
    description: string;
    isActive: boolean;
    headId?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
