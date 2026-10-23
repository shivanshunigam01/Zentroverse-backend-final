import type { AiQuestionCategory, AiQuestionDifficulty } from "../../constants/ai-interviews.js";
import type { ResumeAnalysisResult } from "./resumeAnalysis.service.js";
export type GeneratedQuestion = {
    order: number;
    question: string;
    category: AiQuestionCategory;
    difficulty: AiQuestionDifficulty;
};
export declare function generateInterviewQuestions(input: {
    candidateName: string;
    candidateProfile: string;
    jobTitle: string;
    jobDescription: string;
    requiredSkills: string[];
    resumeAnalysis: ResumeAnalysisResult;
}): Promise<GeneratedQuestion[]>;
