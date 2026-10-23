import mongoose from "mongoose";
export declare const AssetModel: mongoose.Model<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    status: "available" | "assigned" | "maintenance" | "retired";
    category: "other" | "phone" | "laptop" | "monitor" | "tablet" | "accessories" | "furniture" | "badge" | "vehicle";
    assetCode: string;
    serialNumber: string;
    condition: "new" | "good" | "fair" | "poor";
    purchaseDate?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
