import type { Request, Response } from "express";
export declare function listAuditLogs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAuditLog(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
