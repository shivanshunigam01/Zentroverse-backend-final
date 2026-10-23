import mongoose from "mongoose";
export declare const GuaranteeFollowUpModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
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
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    joiningDate: NativeDate;
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    joiningId: mongoose.Types.ObjectId;
    guaranteeStartDate: NativeDate;
    guaranteeEndDate: NativeDate;
    milestone30: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone60: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone90: {
        status: "PENDING" | "COMPLETED" | "AT_RISK" | "FAILED";
        clientFeedback: string;
        candidateFeedback: string;
        completedAt?: NativeDate | null | undefined;
    };
    milestone30Enabled: boolean;
    milestone60Enabled: boolean;
    milestone90Enabled: boolean;
    retentionStatus: "AT_RISK" | "IN_PROGRESS" | "ON_TRACK" | "RETAINED" | "REPLACED" | "DROPPED";
    replacementPeriodDays?: number | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
