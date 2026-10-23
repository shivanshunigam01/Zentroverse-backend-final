import mongoose from "mongoose";
export declare const AIInterviewQuestionModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
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
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    feedback: string;
    order: number;
    evaluation: {
        communication: number;
        technicalAccuracy: number;
        problemSolving: number;
        relevance: number;
    };
    interviewId: mongoose.Types.ObjectId;
    question: string;
    category: "TECHNICAL" | "EXPERIENCE" | "PROBLEM_SOLVING" | "ARCHITECTURE" | "BEHAVIORAL";
    difficulty: "MEDIUM" | "EASY" | "HARD";
    candidateAnswer: string;
    answerMode: "" | "TEXT" | "VOICE";
    submittedAt?: NativeDate | null | undefined;
    score?: number | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
