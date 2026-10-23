import type { Request, Response } from "express";
export declare function listAnnouncements(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function publishAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function unpublishAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteAnnouncement(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
