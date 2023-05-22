import { Router } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";
import { PokemonController } from "../controllers/PokemonController";

export const register = (router: Router): void => {
	const userCtrl = new PokemonController(new HttpResponse());
	router.get(`/pokemon/:id`, userCtrl.run.bind(userCtrl));
};
