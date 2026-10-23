import mongoose from "mongoose";
export declare const ReplacementCaseModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
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
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    status: "ACTIVE" | "CLOSED" | "EXPIRED" | "REPLACED" | "REPLACEMENT_REQUESTED" | "REPLACEMENT_IN_PROGRESS";
    candidateId: mongoose.Types.ObjectId;
    clientId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    joiningId: mongoose.Types.ObjectId;
    replacementReason: "PERFORMANCE" | "RESIGNED" | "ABSCONDING" | "CLIENT_REQUEST" | "ROLE_MISMATCH" | "CULTURE_FIT" | "SALARY_DELAY" | "ROLE_CHANGED" | "LOCATION_CHANGED" | "COMPENSATION_CHANGED" | "RETRENCHMENT" | "REDUNDANCY" | "BUSINESS_CLOSURE" | "RESTRUCTURING" | "UNSAFE_CONDITIONS" | "CLIENT_MISCONDUCT" | "OTHER";
    replacementRequestedDate: NativeDate;
    eligibilityResult: "" | "APPROVED" | "REVIEW" | "NOT_ELIGIBLE";
    eligibilityReasons: string[];
    freeReplacement: boolean;
    freeReplacementUsed: boolean;
    replacementCount: number;
    manualOverride: boolean;
    exclusions: {
        salaryDelayed: boolean;
        roleChanged: boolean;
        locationChanged: boolean;
        compensationChanged: boolean;
        retrenchment: boolean;
        redundancy: boolean;
        businessClosure: boolean;
        restructuring: boolean;
        unsafeConditions: boolean;
        clientMisconduct: boolean;
    };
    replacementCandidateId?: mongoose.Types.ObjectId | null | undefined;
    closedAt?: NativeDate | null | undefined;
    mandateReopenedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
