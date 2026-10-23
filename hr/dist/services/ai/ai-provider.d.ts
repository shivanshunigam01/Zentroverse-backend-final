export type AiChatMessage = {
    role: "system" | "user" | "assistant";
    content: string;
};
export type AiCompletionOptions = {
    messages: AiChatMessage[];
    temperature?: number;
    jsonMode?: boolean;
};
export declare function aiCompleteJson<T>(options: AiCompletionOptions): Promise<T>;
export declare function logAiEvent(event: string, details: Record<string, unknown>): void;
