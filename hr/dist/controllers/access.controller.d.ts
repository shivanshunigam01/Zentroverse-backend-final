import type { Request, Response } from "express";
export declare function listResource(req: Request, res: Response): Response<any, Record<string, any>>;
export declare function mutateResource(req: Request, res: Response): Response<any, Record<string, any>>;
export declare function getAccess(req: Request, res: Response): Response<any, Record<string, any>>;
