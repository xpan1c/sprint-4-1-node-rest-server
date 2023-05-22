import { Request, Response } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";

export class PokemonController {
	constructor(private readonly httpResponse: HttpResponse) {}

	run(req: Request, res: Response): void {
		const { id } = req.params;
		const intId = parseInt(id, 10);
		if (isNaN(intId) || intId < 1 || intId > 1010) {
			this.httpResponse.BadRequest(res, "Invalid Pokemon ID");

			return;
		}
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((response) => response.json())
			.then(({ name, height, weight }) => {
				const data = { nombre: name, peso: height, altura: weight };
				this.httpResponse.Ok(res, data);
			})
			.catch((error) => {
				if (error instanceof Error) {
					this.httpResponse.Error(res, { message: error.message });
				} else {
					this.httpResponse.Error(res, { message: "An unexpected error occurred." });
				}
			});
	}
}
