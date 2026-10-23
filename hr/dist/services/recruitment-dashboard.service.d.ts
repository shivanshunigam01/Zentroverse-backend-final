import type { AuthContext } from "../types/auth.js";
import type { RecruitmentDashboardQueryInput } from "../validators/recruitment-dashboard.validators.js";
export declare function getRecruitmentDashboard(auth: AuthContext, query: RecruitmentDashboardQueryInput): Promise<{
    filters: {
        from: string;
        to: string;
        clientId: string;
        recruiterId: string;
        mandateId: string;
    };
    metrics: {
        activeClients: number;
        openMandates: number;
        totalCandidates: number;
        candidatesSourced: number;
        candidatesScreened: number;
        candidatesSubmitted: number;
        interviewsScheduled: number;
        offersPending: number;
        candidatesJoined: number;
        timeToFirstSubmissionDays: number | null;
        timeToFillDays: number | null;
        submissionToInterviewPercent: number | null;
        interviewToOfferPercent: number | null;
        offerToJoinPercent: number | null;
        joiningDropoutPercent: number | null;
        retention90DayPercent: number | null;
        revenue: number;
        outstandingReceivables: number;
        revenuePerRecruiter: Array<{
            recruiterId: string;
            name: string;
            revenue: number;
        }>;
    };
}>;
