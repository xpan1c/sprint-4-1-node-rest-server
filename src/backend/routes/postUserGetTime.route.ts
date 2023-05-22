import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { TimeController } from "../controllers/TimeController";
import { basicAuthMiddleware } from "../middleware/basicAuthMiddle";
import { noCacheMiddleware } from "../middleware/noCacheMiddle";

export const register = (router: Router): void => {
	const userCtrl = new TimeController(new HttpResponse());
	router.post(`/time`, basicAuthMiddleware, noCacheMiddleware, userCtrl.run.bind(userCtrl));
};
