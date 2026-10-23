import type { Request, Response } from "express";
export declare function listEvaluations(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getEvaluation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createEvaluation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateEvaluation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteEvaluation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
