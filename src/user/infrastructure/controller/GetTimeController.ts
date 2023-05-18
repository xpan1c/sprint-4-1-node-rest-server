import { Request, Response } from "express";

import { HttpResponse } from "../../../shared/infrastructure/response/HttpResponse";

export class GetTimeController {
	constructor(private readonly httpResponse: HttpResponse) {}

	run(req: Request, res: Response): void {
		try {
			const time = new Date();
			const data: { time: string } = { time: time.toString() };
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
