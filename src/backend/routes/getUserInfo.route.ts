import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { UserInformation } from "../../user/application/UserInformation";
import { UserInfoController } from "../controllers/UserInfoController";

export const register = (router: Router): void => {
	const userCtrl = new UserInfoController(new UserInformation(), new HttpResponse());
	router.get(`/user`, userCtrl.run.bind(userCtrl));
};
