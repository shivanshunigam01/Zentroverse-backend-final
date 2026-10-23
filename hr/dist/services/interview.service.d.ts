import type { AuthContext } from "../types/auth.js";
import type { CreateInterviewInput, InterviewListQueryInput, UpdateInterviewInput } from "../validators/interview.validators.js";
export declare function toPublicInterview(doc: Record<string, unknown>): {
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    interviewTypeLabel: string;
    scheduledAt: string;
    duration: number;
    interviewers: {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    interviewerIds: string[];
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    statusLabel: string;
    feedback: {
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        compensationFit: number;
        joiningRisk: number;
        comments: string;
    };
    decision: "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    decisionLabel: string;
    nextAction: string;
    nextActionDeadline: string;
    createdAt: string;
    updatedAt: string;
};
export declare function listInterviews(auth: AuthContext, query: InterviewListQueryInput): Promise<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    items: {
        id: string;
        organizationId: string;
        candidateId: string;
        candidate: {
            id: string;
            name: string;
            email: string;
            candidateNumber: string;
        } | null;
        mandateId: string;
        mandate: {
            id: string;
            mandateNumber: string;
            position: string;
            status: string;
        } | null;
        submissionId: string;
        submission: {
            id: string;
            status: string;
        } | null;
        round: number;
        interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
        interviewTypeLabel: string;
        scheduledAt: string;
        duration: number;
        interviewers: {
            id: string;
            name: string;
            email: string;
            role: string;
        }[];
        interviewerIds: string[];
        status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
        statusLabel: string;
        feedback: {
            technicalScore: number;
            communicationScore: number;
            cultureFitScore: number;
            leadershipScore: number;
            compensationFit: number;
            joiningRisk: number;
            comments: string;
        };
        decision: "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
        decisionLabel: string;
        nextAction: string;
        nextActionDeadline: string;
        createdAt: string;
        updatedAt: string;
    }[];
}>;
export declare function getInterview(auth: AuthContext, id: string): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    interviewTypeLabel: string;
    scheduledAt: string;
    duration: number;
    interviewers: {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    interviewerIds: string[];
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    statusLabel: string;
    feedback: {
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        compensationFit: number;
        joiningRisk: number;
        comments: string;
    };
    decision: "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    decisionLabel: string;
    nextAction: string;
    nextActionDeadline: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function createInterview(auth: AuthContext, input: CreateInterviewInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    interviewTypeLabel: string;
    scheduledAt: string;
    duration: number;
    interviewers: {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    interviewerIds: string[];
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    statusLabel: string;
    feedback: {
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        compensationFit: number;
        joiningRisk: number;
        comments: string;
    };
    decision: "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    decisionLabel: string;
    nextAction: string;
    nextActionDeadline: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function updateInterview(auth: AuthContext, id: string, input: UpdateInterviewInput): Promise<{
    id: string;
    organizationId: string;
    candidateId: string;
    candidate: {
        id: string;
        name: string;
        email: string;
        candidateNumber: string;
    } | null;
    mandateId: string;
    mandate: {
        id: string;
        mandateNumber: string;
        position: string;
        status: string;
    } | null;
    submissionId: string;
    submission: {
        id: string;
        status: string;
    } | null;
    round: number;
    interviewType: "PHONE" | "VIDEO" | "IN_PERSON" | "ONLINE";
    interviewTypeLabel: string;
    scheduledAt: string;
    duration: number;
    interviewers: {
        id: string;
        name: string;
        email: string;
        role: string;
    }[];
    interviewerIds: string[];
    status: "COMPLETED" | "CANCELLED" | "NO_SHOW" | "SCHEDULED" | "RESCHEDULED";
    statusLabel: string;
    feedback: {
        technicalScore: number;
        communicationScore: number;
        cultureFitScore: number;
        leadershipScore: number;
        compensationFit: number;
        joiningRisk: number;
        comments: string;
    };
    decision: "REJECTED" | "ON_HOLD" | "HOLD" | "REJECT" | "SELECTED" | "SELECT" | "NEXT_ROUND";
    decisionLabel: string;
    nextAction: string;
    nextActionDeadline: string;
    createdAt: string;
    updatedAt: string;
}>;
export declare function deleteInterview(auth: AuthContext, id: string): Promise<void>;
