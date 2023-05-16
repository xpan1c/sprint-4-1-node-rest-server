import { Request, Response } from "express";

import { HttpResponse } from "../../../shared/infrastructure/response/HttpResponse";
import { UserInformation } from "../../application/UserInformation";

export class GetUserInfoController {
	constructor(
		private readonly userCase: UserInformation,
		private readonly httpResponse: HttpResponse
	) {}

	run(req: Request, res: Response): void {
		try {
			const data: { name: string; age: number; hostUrl?: string } = this.userCase.getUserInfo();
			const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
			data.hostUrl = fullUrl;
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
