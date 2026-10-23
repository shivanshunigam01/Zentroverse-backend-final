import type { Response } from "express";
export declare function setRefreshCookie(res: Response, token: string): void;
export declare function clearRefreshCookie(res: Response): void;
export declare function readRefreshCookie(req: {
    cookies?: Record<string, string | undefined>;
}): string | undefined;
