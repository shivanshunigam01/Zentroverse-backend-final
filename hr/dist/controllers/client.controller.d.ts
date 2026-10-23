import type { Request, Response } from "express";
export declare function listClients(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteClient(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
