import type { Request, Response } from "express";
export declare function listPayments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createPayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updatePayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deletePayment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
