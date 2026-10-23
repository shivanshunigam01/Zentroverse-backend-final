import type { Request, Response } from "express";
export declare function getMandatePipeline(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function transitionPipelineStage(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
