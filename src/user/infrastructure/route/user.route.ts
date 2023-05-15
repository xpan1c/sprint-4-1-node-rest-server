import { Router } from "express";

import { HttpResponse } from "../../../backend/shared/response/HttpResponse";
import { UserInformation } from "../../application/UserInformation";
import { UserController } from "../controller/user.ctrl";

export const route = Router();

const userInformation = new UserInformation();
const httpResponse = new HttpResponse();

const userCtrl = new UserController(userInformation, httpResponse);

route.get(`/user`, userCtrl.getUserInfo.bind(userCtrl));
