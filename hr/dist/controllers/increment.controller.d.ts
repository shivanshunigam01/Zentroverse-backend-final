import type { Request, Response } from "express";
export declare function getIncrementWorksheet(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function applyIncrements(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
