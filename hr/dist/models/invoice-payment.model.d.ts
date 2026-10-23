import mongoose from "mongoose";
export declare const InvoicePaymentModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
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
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    status: "PENDING" | "COMPLETED" | "FAILED" | "REVERSED";
    amount: number;
    remarks: string;
    invoiceId: mongoose.Types.ObjectId;
    paymentDate: NativeDate;
    paymentMethod: "BANK_TRANSFER" | "UPI" | "NEFT" | "RTGS" | "CHEQUE" | "CASH" | "CARD";
    transactionReference: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
