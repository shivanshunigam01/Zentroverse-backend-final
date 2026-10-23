import type { Request, Response } from "express";
export declare function listEmployees(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMyEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function activateEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deactivateEmployee(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
