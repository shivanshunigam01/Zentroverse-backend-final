import type { Request, Response } from "express";
export declare function listReplacements(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getReplacement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createReplacement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateReplacement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteReplacement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
