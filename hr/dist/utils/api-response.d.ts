import type { Response } from "express";
type SuccessOptions<T> = {
    message?: string;
    data?: T;
    statusCode?: number;
};
export declare function sendSuccess<T>(res: Response, options?: SuccessOptions<T>): Response<any, Record<string, any>>;
export declare function sendError(res: Response, options: {
    message: string;
    statusCode?: number;
    errors?: unknown;
}): Response<any, Record<string, any>>;
export {};
