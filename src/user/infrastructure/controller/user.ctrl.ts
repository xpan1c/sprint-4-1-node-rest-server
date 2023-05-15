import { Request, Response } from "express";

import { UserInformation } from "../../application/UserInformation";

export class UserController {
	constructor(private readonly userCase: UserInformation) {}
	public getUserInfo(req: Request, res: Response): void {
		const user = this.userCase.getUserInfo();

		res.json(user);
	}
}
