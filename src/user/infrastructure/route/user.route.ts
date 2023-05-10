import { Router } from "express";

import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.ctrl";

export const route = Router();

const userUseCase = new UserUseCase();

const userCtrl = new UserController(userUseCase);

route.get(`/user`, userCtrl.getUserInfo.bind(userCtrl));
