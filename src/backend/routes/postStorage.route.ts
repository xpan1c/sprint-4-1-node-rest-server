import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { StorageController } from "../controllers/StorageController";
import { multerMiddleware } from "../middleware/multerMiddle";

export const register = (router: Router): void => {
	const userCtrl = new StorageController(new HttpResponse());
	router.post(`/upload`, multerMiddleware.single("myfile"), userCtrl.run.bind(userCtrl));
};
