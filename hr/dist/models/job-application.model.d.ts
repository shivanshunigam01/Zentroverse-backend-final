import mongoose from "mongoose";
export declare const JobApplicationModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
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
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    consentConfirmed: boolean;
    notes: string;
    consentStatement: string;
    consentVersion: string;
    consentMethod: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    consentRecordedAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
