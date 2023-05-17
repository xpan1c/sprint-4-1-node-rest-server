import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { UserInformation } from "../../user/application/UserInformation";
import { GetUserInfoController } from "../../user/infrastructure/controller/GetUserInfoController";

export const register = (router: Router): void => {
	const userCtrl = new GetUserInfoController(new UserInformation(), new HttpResponse());
	router.get(`/user`, userCtrl.run.bind(userCtrl));
};
