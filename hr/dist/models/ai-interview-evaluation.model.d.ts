import mongoose from "mongoose";
export declare const AIInterviewEvaluationModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
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
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    result: "PENDING" | "FAILED" | "PASSED";
    strengths: string[];
    recommendation: string;
    technicalScore: number;
    communicationScore: number;
    interviewId: mongoose.Types.ObjectId;
    problemSolvingScore: number;
    relevanceScore: number;
    finalScore: number;
    overallFeedback: string;
    weaknesses: string[];
    rawEvaluation?: any;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
