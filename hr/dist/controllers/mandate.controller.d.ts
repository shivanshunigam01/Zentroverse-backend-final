import type { Request, Response } from "express";
export declare function listMandates(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMandate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createMandate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateMandate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteMandate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
