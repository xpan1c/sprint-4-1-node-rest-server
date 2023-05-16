import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { UserInformation } from "../../user/application/UserInformation";
import { UserController } from "../../user/infrastructure/controller/UserController";

export const router = Router();

const userInformation = new UserInformation();
const httpResponse = new HttpResponse();

const userCtrl = new UserController(userInformation, httpResponse);

router.get(`/user`, userCtrl.getUserInfo.bind(userCtrl));
