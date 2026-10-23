import type { Request, Response } from "express";
export declare function register(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function me(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function forgotPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function resetPassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function changePassword(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
