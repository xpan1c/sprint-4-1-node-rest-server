import { Request, Response } from "express";

import { HttpResponse } from "../../shared/infrastructure/response/HttpResponse";

export class TimeController {
	constructor(private readonly httpResponse: HttpResponse) {}

	run(req: Request, res: Response): void {
		try {
			const username = req.body.username;
			if (!username) {
				this.httpResponse.BadRequest(res, "UserName is required");

				return;
			}
			const time = new Date();
			const data: { time: string; username: string } = { time: time.toString(), username };
			this.httpResponse.Ok(res, data);
		} catch (error) {
			if (error instanceof Error) {
				this.httpResponse.Error(res, { message: error.message });
			} else {
				this.httpResponse.Error(res, { message: "An unexpected error occurred." });
			}
		}
	}
}
