import type { AiInterviewResult } from "../../constants/ai-interviews.js";
export type AnswerEvaluationResult = {
    questionScore: number;
    technicalAccuracy: number;
    communication: number;
    problemSolving: number;
    relevance: number;
    feedback: string;
};
export type FinalEvaluationResult = {
    technicalScore: number;
    communicationScore: number;
    problemSolvingScore: number;
    relevanceScore: number;
    overallFeedback: string;
    strengths: string[];
    weaknesses: string[];
    recommendation: string;
};
export declare function evaluateAnswer(input: {
    question: string;
    category: string;
    candidateAnswer: string;
    jobTitle: string;
    requiredSkills: string[];
}): Promise<AnswerEvaluationResult>;
export declare function calculateFinalScore(scores: number[]): number;
export declare function generateInterviewFeedback(input: {
    candidateName: string;
    jobTitle: string;
    questionEvaluations: Array<{
        question: string;
        score: number;
        feedback: string;
    }>;
    finalScore: number;
}): Promise<FinalEvaluationResult>;
export declare function determineResult(finalScore: number, passingScore: number): AiInterviewResult;
