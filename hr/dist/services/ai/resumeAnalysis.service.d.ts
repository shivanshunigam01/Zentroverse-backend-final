export type ResumeAnalysisResult = {
    candidateName: string;
    skills: string[];
    experience: string[];
    projects: string[];
    education: string[];
    technologies: string[];
    strengths: string[];
    missingSkills: string[];
    jobMatchScore: number;
};
export declare function analyzeResumeAndJob(input: {
    candidateName: string;
    candidateProfile: string;
    jobTitle: string;
    jobDescription: string;
    requiredSkills: string[];
}): Promise<ResumeAnalysisResult>;
