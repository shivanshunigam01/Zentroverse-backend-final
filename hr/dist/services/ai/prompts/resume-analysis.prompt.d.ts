export declare const RESUME_ANALYSIS_SYSTEM_PROMPT = "You are an expert technical recruiter and resume analyst.\nAnalyze the candidate profile against the job requirements and return ONLY valid JSON with no markdown formatting.\nThe JSON must match this exact structure:\n{\n  \"candidateName\": \"string\",\n  \"skills\": [\"string\"],\n  \"experience\": [\"string\"],\n  \"projects\": [\"string\"],\n  \"education\": [\"string\"],\n  \"technologies\": [\"string\"],\n  \"strengths\": [\"string\"],\n  \"missingSkills\": [\"string\"],\n  \"jobMatchScore\": number (0-100)\n}\nBe specific and base your analysis on the provided data. Do not invent credentials not supported by the resume data.";
export declare function buildResumeAnalysisUserPrompt(input: {
    candidateName: string;
    candidateProfile: string;
    jobTitle: string;
    jobDescription: string;
    requiredSkills: string[];
}): string;
