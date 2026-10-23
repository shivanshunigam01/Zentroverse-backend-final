import type { Request, Response } from "express";
export declare function listNotifications(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function unreadNotificationCount(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markNotificationRead(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function markAllNotificationsRead(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteNotification(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
