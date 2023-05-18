import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { GetTimeController } from "../../user/infrastructure/controller/GetTimeController";
import { basicAuthMiddleware } from "../middleware/basicAuthMiddle";
import { noCacheMiddleware } from "../middleware/noCacheMiddle";

export const register = (router: Router): void => {
	const userCtrl = new GetTimeController(new HttpResponse());
	router.post(`/time`, basicAuthMiddleware, noCacheMiddleware, userCtrl.run.bind(userCtrl));
};
