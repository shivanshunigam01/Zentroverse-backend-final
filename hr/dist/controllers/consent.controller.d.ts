import type { Request, Response } from "express";
export declare function listConsents(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getConsent(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createConsent(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateConsent(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteConsent(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
