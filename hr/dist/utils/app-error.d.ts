import { type HttpStatus } from "../constants/http.js";
export declare class AppError extends Error {
    readonly statusCode: HttpStatus;
    readonly errors?: unknown;
    readonly isOperational: boolean;
    constructor(message: string, statusCode?: HttpStatus, errors?: unknown, isOperational?: boolean);
    static unauthorized(message?: string): AppError;
    static forbidden(message?: string): AppError;
    static conflict(message?: string, errors?: unknown): AppError;
    static badRequest(message?: string, errors?: unknown): AppError;
    static validation(message?: string, errors?: unknown): AppError;
    static notFound(message?: string): AppError;
    static tooManyRequests(message?: string): AppError;
    static internal(message?: string): AppError;
}
