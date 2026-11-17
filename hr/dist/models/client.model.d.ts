import mongoose from "mongoose";
export declare const ClientModel: mongoose.Model<{
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    city: string;
    state: string;
    country: string;
    organizationId: mongoose.Types.ObjectId;
    address: string;
    industry: string;
    status: "LEAD" | "ACTIVE" | "INACTIVE" | "CLOSED";
    createdBy: mongoose.Types.ObjectId;
    companyName: string;
    legalEntityName: string;
    website: string;
    GSTNumber: string;
    PANNumber: string;
    registeredAddress: string;
    contactPersons: mongoose.Types.DocumentArray<{
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }, {}, {}> & {
        name: string;
        phone: string;
        email: string;
        designation: string;
    }>;
    onboardingStatus: "REJECTED" | "PENDING" | "COMPLETED";
    KYCStatus: "REJECTED" | "PENDING" | "VERIFIED";
    kycEvidence: mongoose.Types.DocumentArray<{
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, {}, {}> & {
        status: "REJECTED" | "PENDING" | "VERIFIED";
        fileName: string;
        documentType: string;
        evidenceUrl: string;
        reviewNotes: string;
        reviewedAt?: NativeDate | null | undefined;
        reviewedBy?: mongoose.Types.ObjectId | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    invoiceSubmissionProcess: string;
    purchaseOrderRequired: boolean;
    purchaseOrderRequirements: string;
    vendorCode: string;
    paymentCycleDays: number;
    authorizedSignatory: string;
    escalationContact: string;
    termsApproved: boolean;
    notes: string;
    termsApprovedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
