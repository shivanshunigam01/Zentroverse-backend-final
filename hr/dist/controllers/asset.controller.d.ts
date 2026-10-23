import type { Request, Response } from "express";
export declare function listAssets(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function assignAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function returnAsset(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function listAssetHistory(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
