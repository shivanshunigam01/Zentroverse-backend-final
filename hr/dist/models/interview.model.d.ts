import mongoose from "mongoose";
export declare const InterviewModel: mongoose.Model<{
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
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
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    organizationId: mongoose.Types.ObjectId;
    feedback: {
        compensationFit: number;
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        joiningRisk: number;
        comments: string;
    };
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    candidateId: mongoose.Types.ObjectId;
    mandateId: mongoose.Types.ObjectId;
    submissionId: mongoose.Types.ObjectId;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    scheduledAt: NativeDate;
    duration: number;
    interviewers: mongoose.Types.ObjectId[];
    decision: "" | "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    nextAction: string;
    nextActionDeadline?: NativeDate | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
