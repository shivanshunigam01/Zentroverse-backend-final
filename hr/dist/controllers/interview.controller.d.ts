import type { Request, Response } from "express";
export declare function listInterviews(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getInterview(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createInterview(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateInterview(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteInterview(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
