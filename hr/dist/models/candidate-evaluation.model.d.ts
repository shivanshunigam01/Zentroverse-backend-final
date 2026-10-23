import mongoose from "mongoose";
export declare const CandidateEvaluationModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
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
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    strengths: string[];
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    remarks: string;
    recruiterId: mongoose.Types.ObjectId;
    scoringVersion: "LEGACY_6" | "POINT_100";
    scores: {
        roleFit: number;
        experienceFit: number;
        communication: number;
        industryExperience: number;
        compensationFit: number;
        joiningProbability: number;
    };
    scorecard: {
        communication: number;
        joiningProbability: number;
        roleKnowledge: number;
        relevantExperience: number;
        achievementEvidence: number;
        stability: number;
        locationFit: number;
        ctcFit: number;
    };
    totalScore: number;
    recommendation: "STRONG_RECOMMEND" | "RECOMMEND" | "HOLD" | "REJECT" | "STRONGLY_RECOMMENDED" | "RECOMMENDED" | "NOT_RECOMMENDED";
    concerns: string[];
    evaluatedAt: NativeDate;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
