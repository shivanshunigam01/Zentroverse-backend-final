import type { NextFunction, Request, RequestHandler, Response } from "express";
type AsyncRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown> | unknown;
export declare function asyncHandler(handler: AsyncRouteHandler): RequestHandler;
export {};
