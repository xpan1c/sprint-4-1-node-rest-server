import { NextFunction, Request, Response } from "express";

export const noCacheMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	res.setHeader("Cache-Control", "no-cache");
	next();
};
