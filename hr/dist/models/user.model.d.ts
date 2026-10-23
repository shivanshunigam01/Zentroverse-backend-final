import mongoose from "mongoose";
export declare const UserModel: mongoose.Model<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
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
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    organizationId: mongoose.Types.ObjectId;
    profileImage: string;
    email: string;
    password: string;
    role: "SUPER_ADMIN" | "HR_ADMIN" | "MANAGER" | "EMPLOYEE";
    isActive: boolean;
    employeeId?: string | null | undefined;
    lastLogin?: NativeDate | null | undefined;
    refreshTokenHash?: string | null | undefined;
    passwordResetToken?: string | null | undefined;
    passwordResetExpires?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
