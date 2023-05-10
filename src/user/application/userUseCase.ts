import { UserEntity } from "../domain/user.entity";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
	userinfo = (): UserEntity => {
		const name = process.env.USERNAME ?? null;
		const birthDayString = process.env.BIRTHDAY ?? null;
		if (name || birthDayString === null) {
			throw new Error("Please configure your environment file");
		}
		const birthDay = new Date(birthDayString);
		const userValue = new UserValue({ name, birthDay });

		return userValue;
	};
}
