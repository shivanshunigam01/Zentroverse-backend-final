import type { Request, Response } from "express";
export declare function listPublicCareers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPublicCareer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function applyToPublicCareer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
