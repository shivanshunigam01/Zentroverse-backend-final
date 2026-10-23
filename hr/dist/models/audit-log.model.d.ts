import mongoose from "mongoose";
export declare const AuditLogModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
}, {
    id: string;
}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
}, {
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
}, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: {
        createdAt: true;
        updatedAt: false;
    };
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    module: "CLIENTS" | "AGREEMENTS" | "MANDATES" | "CANDIDATES" | "CONSENTS" | "EVALUATIONS" | "SUBMISSIONS" | "INTERVIEWS" | "OFFERS" | "JOININGS" | "INVOICES" | "PAYMENTS" | "GUARANTEES" | "REPLACEMENTS";
    action: "CREATED" | "UPDATED" | "STATUS_CHANGED" | "SUBMITTED" | "ACCEPTED" | "JOINED" | "APPROVED" | "REJECTED" | "OVERRIDE" | "GENERATED";
    recordId: mongoose.Types.ObjectId;
    ipAddress: string;
    previousData?: any;
    newData?: any;
    createdAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
