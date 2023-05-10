import "dotenv/config";

import { UserEntity } from "../domain/user.entity";

export class UserUseCase {
	userinfo = (): UserEntity => {
		const name = process.env.USER_NAME ?? "pepe";
		const birthDayString = process.env.USER_BIRTHDAY ?? "1980-10-15";

		const birthDay = new Date(birthDayString);
		const age = this.calculateAge(birthDay);

		return { name, age };
	};

	private readonly calculateAge = (birthDate: Date): number => {
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};
}
