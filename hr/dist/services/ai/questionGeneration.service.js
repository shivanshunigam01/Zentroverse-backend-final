import { AI_INTERVIEW_QUESTION_COUNT } from "../../constants/ai-interviews.js";
import { QUESTION_GENERATION_SYSTEM_PROMPT, buildQuestionGenerationUserPrompt, } from "./prompts/question-generation.prompt.js";
import { aiCompleteJson, logAiEvent } from "./ai-provider.js";
export async function generateInterviewQuestions(input) {
    logAiEvent("question_generation_started", { candidateName: input.candidateName });
    const result = await aiCompleteJson({
        messages: [
            { role: "system", content: QUESTION_GENERATION_SYSTEM_PROMPT },
            { role: "user", content: buildQuestionGenerationUserPrompt(input) },
        ],
    });
    const questions = (result.questions ?? [])
        .slice(0, AI_INTERVIEW_QUESTION_COUNT)
        .map((q, index) => ({
        order: index + 1,
        question: String(q.question ?? "").trim(),
        category: (q.category ?? "TECHNICAL"),
        difficulty: (q.difficulty ?? "MEDIUM"),
    }))
        .filter((q) => q.question);
    while (questions.length < AI_INTERVIEW_QUESTION_COUNT) {
        questions.push({
            order: questions.length + 1,
            question: `Describe your experience with ${input.requiredSkills[0] ?? "the required technologies"} in a production environment.`,
            category: "TECHNICAL",
            difficulty: "MEDIUM",
        });
    }
    logAiEvent("question_generation_completed", {
        candidateName: input.candidateName,
        questionCount: questions.length,
    });
    return questions;
}
//# sourceMappingURL=questionGeneration.service.js.map