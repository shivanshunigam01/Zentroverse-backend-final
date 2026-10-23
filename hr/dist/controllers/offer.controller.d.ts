import type { Request, Response } from "express";
export declare function listOffers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getOffer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createOffer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateOffer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteOffer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
