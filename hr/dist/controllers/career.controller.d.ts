import type { Request, Response } from "express";
export declare function listCareerJobs(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getCareerJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function applyToCareerJob(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
