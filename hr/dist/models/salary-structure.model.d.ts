import mongoose from "mongoose";
export declare const SalaryStructureModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
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
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    basicSalary: number;
    hra: number;
    allowances: number;
    bonus: number;
    deductions: number;
    effectiveFrom: NativeDate;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
