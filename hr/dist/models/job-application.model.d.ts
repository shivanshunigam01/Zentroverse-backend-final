import mongoose from "mongoose";
export declare const JobApplicationModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
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
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
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
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    source: "CAREER_PAGE";
    status: "REJECTED" | "UNDER_REVIEW" | "SHORTLISTED" | "WITHDRAWN" | "APPLIED" | "RESUME_SCREENING" | "AI_INTERVIEW_PENDING" | "AI_INTERVIEW_COMPLETED" | "AI_INTERVIEW_PASSED" | "AI_INTERVIEW_FAILED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
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
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
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
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
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
    notes: string;
    applicationNumber: string;
    appliedAt: NativeDate;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
