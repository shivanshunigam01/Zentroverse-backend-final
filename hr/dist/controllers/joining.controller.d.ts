import type { Request, Response } from "express";
export declare function listJoinings(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getJoining(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createJoining(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateJoining(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteJoining(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
