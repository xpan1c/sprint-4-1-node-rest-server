import { Request, Response } from "express";

import { UserUseCase } from "../../application/userUseCase";

export class UserController {
	constructor(private readonly userCase: UserUseCase) {}
	public getUserInfo(req: Request, res: Response): void {
		const user = this.userCase.userinfo();

		res.json(user);
	}
}
