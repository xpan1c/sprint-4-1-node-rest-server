import { Request, Response } from "express";

import { HttpResponse } from "../../../shared/infrastructure/response/HttpResponse";

export class StorageController {
	constructor(private readonly httpResponse: HttpResponse) {}

	public getFile(req: Request, res: Response): void {
		try {
			const { file } = req;
			const dataToRegister: { fileName: string; path: string } = {
				fileName: `${file?.filename}`,
				path: `${file?.path}`,
			};
			this.httpResponse.Ok(res, dataToRegister);
		} catch (error) {
			if (error instanceof Error) {
				this.httpResponse.Error(res, { message: error.message });
			} else {
				this.httpResponse.Error(res, { message: "An unexpected error occurred." });
			}
		}
	}
}
