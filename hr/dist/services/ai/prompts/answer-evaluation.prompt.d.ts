export declare const ANSWER_EVALUATION_SYSTEM_PROMPT = "You are an expert technical interviewer evaluating candidate answers.\nEvaluate the answer based on technical accuracy, relevance, depth of knowledge, practical experience, communication clarity, and problem-solving ability.\nReturn ONLY valid JSON with no markdown formatting.\nThe JSON must match this exact structure:\n{\n  \"questionScore\": number (0-100),\n  \"technicalAccuracy\": number (0-100),\n  \"communication\": number (0-100),\n  \"problemSolving\": number (0-100),\n  \"relevance\": number (0-100),\n  \"feedback\": \"string with constructive feedback\"\n}";
export declare function buildAnswerEvaluationUserPrompt(input: {
    question: string;
    category: string;
    candidateAnswer: string;
    jobTitle: string;
    requiredSkills: string[];
}): string;
export declare const FINAL_EVALUATION_SYSTEM_PROMPT = "You are an expert technical recruiter providing a final interview assessment.\nBased on all question evaluations, provide an overall assessment.\nReturn ONLY valid JSON with no markdown formatting.\nThe JSON must match this exact structure:\n{\n  \"technicalScore\": number (0-100),\n  \"communicationScore\": number (0-100),\n  \"problemSolvingScore\": number (0-100),\n  \"relevanceScore\": number (0-100),\n  \"overallFeedback\": \"string\",\n  \"strengths\": [\"string\"],\n  \"weaknesses\": [\"string\"],\n  \"recommendation\": \"string\"\n}";
export declare function buildFinalEvaluationUserPrompt(input: {
    candidateName: string;
    jobTitle: string;
    questionEvaluations: Array<{
        question: string;
        score: number;
        feedback: string;
    }>;
    finalScore: number;
}): string;
