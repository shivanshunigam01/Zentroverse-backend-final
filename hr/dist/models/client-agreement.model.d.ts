import mongoose from "mongoose";
export declare const ClientAgreementModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
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
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "DRAFT" | "EXPIRED" | "TERMINATED";
    clientId: mongoose.Types.ObjectId;
    agreementNumber: string;
    effectiveDate: NativeDate;
    commercialTerms: {
        recruitmentFee: number;
        feeType: "FIXED" | "PERCENTAGE";
        paymentTermsDays: number;
        gstRatePercent: number;
        gstSplitMode: "CGST_SGST" | "IGST" | "NONE";
    };
    ownershipPeriodMonths: number;
    duplicateNotificationDays: number;
    replacementPeriodDays: number;
    createdBy: mongoose.Types.ObjectId;
    expiryDate?: NativeDate | null | undefined;
    signedDate?: NativeDate | null | undefined;
    signedDocument?: {
        fileUrl: string;
        fileName: string;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
