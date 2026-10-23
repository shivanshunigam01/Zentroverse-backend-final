import type { Request, Response } from "express";
export declare function listCandidates(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getCandidate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createCandidate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateCandidate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteCandidate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
