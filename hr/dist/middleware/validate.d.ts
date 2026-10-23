import type { RequestHandler } from "express";
import type { ZodType } from "zod";
export declare function validateBody(schema: ZodType): RequestHandler;
export declare function validateQuery(schema: ZodType): RequestHandler;
