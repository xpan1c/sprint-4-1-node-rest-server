import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { StorageController } from "../../storage/infrastructure/controller/StorageController";
import { multerMiddleware } from "../middleware/multerMiddle";

export const router = Router();

export const register = (router: Router): void => {
	const userCtrl = new StorageController(new HttpResponse());
	router.post(`/upload`, multerMiddleware.single("myfile"), userCtrl.getFile.bind(userCtrl));
};
