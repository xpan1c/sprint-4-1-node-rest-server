import { Router } from "express";

import { UserInformation } from "../../application/UserInformation";
import { UserController } from "../controller/user.ctrl";

export const route = Router();

const userInformation = new UserInformation();

const userCtrl = new UserController(userInformation);

route.get(`/user`, userCtrl.getUserInfo.bind(userCtrl));
