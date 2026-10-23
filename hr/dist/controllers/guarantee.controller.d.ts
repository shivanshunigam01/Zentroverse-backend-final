import type { Request, Response } from "express";
export declare function listGuarantees(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getGuarantee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createGuarantee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateGuarantee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteGuarantee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
