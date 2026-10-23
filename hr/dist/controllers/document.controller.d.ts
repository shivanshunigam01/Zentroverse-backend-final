import type { Request, Response } from "express";
export declare function listDocuments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getDocument(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getDocumentFile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function uploadDocument(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateDocument(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteDocument(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
