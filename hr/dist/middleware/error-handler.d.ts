import type { NextFunction, Request, Response } from "express";
export declare function errorHandler(error: unknown, req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
