import type { Request, Response } from "express";
export declare function listAgreements(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAgreement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createAgreement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAgreement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteAgreement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
