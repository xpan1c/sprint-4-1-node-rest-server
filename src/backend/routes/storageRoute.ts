import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { StorageController } from "../../storage/infrastructure/controller/StorageController";
import { multerMiddleware } from "../../storage/infrastructure/middleware/multerMiddle";

export const router = Router();

const httpResponse = new HttpResponse();

const userCtrl = new StorageController(httpResponse);

router.post(`/update`, multerMiddleware.single("myfile"), userCtrl.getFile.bind(userCtrl));
