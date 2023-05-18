import { NextFunction, Request, Response } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { UserInformation } from "../../user/application/UserInformation";

export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		const [username, password] = Buffer.from(token, "base64").toString("utf-8").split(":");
		const { name, pass } = new UserInformation().getUserInfo();
		// Reemplaza 'admin' y 'supersecret' con tus propios usuarios y contraseñas
		if (username === name && password === pass) {
			next();

			return;
		}
	}

	res.setHeader("WWW-Authenticate", 'Basic realm="Restricted Area"');
	new HttpResponse().Unauthorized(res, "Error in your username or password");
};
