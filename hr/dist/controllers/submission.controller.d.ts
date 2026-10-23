import type { Request, Response } from "express";
export declare function listSubmissions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getSubmission(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createSubmission(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateSubmission(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteSubmission(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
