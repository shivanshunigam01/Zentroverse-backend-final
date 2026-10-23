import mongoose from "mongoose";
export declare const PayrollModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
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
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    employeeId: mongoose.Types.ObjectId;
    year: number;
    deductions: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    status: "generated" | "paid";
    month: number;
    earnings: mongoose.Types.DocumentArray<{
        key: string;
        label: string;
        amount: number;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        key: string;
        label: string;
        amount: number;
    }, {}, {}> & {
        key: string;
        label: string;
        amount: number;
    }>;
    grossSalary: number;
    totalDeductions: number;
    netSalary: number;
    generatedAt: NativeDate;
    salaryStructureId?: mongoose.Types.ObjectId | null | undefined;
    generatedBy?: mongoose.Types.ObjectId | null | undefined;
    paidAt?: NativeDate | null | undefined;
    paidBy?: mongoose.Types.ObjectId | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
