import mongoose from "mongoose";
export declare const AIInterviewModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
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
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    status: "COMPLETED" | "EXPIRED" | "CANCELLED" | "IN_PROGRESS" | "SCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    applicationId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    applicationType: "JOB_APPLICATION" | "APPLICATION";
    jobType: "MANDATE" | "JOB";
    uniqueToken: string;
    resumeAnalysis: {
        strengths: string[];
        education: string[];
        experience: string[];
        skills: string[];
        candidateName: string;
        projects: string[];
        technologies: string[];
        missingSkills: string[];
        jobMatchScore: number;
        rawAnalysis?: any;
    };
    expiresAt: NativeDate;
    overriddenResult: "" | "PENDING" | "FAILED" | "PASSED";
    overrideReason: string;
    passingScoreUsed: number;
    completedAt?: NativeDate | null | undefined;
    finalScore?: number | null | undefined;
    startedAt?: NativeDate | null | undefined;
    overriddenBy?: mongoose.Types.ObjectId | null | undefined;
    overriddenAt?: NativeDate | null | undefined;
    invitationSentAt?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
