import "dotenv/config";

import { User } from "../domain/User";

export class UserInformation {
	getUserInfo = (): { name: string; age: number } => {
		const name = process.env.USER_NAME ?? "pepe";
		const birthDayString = process.env.USER_BIRTHDAY ?? "1980-10-15";
		const user = User.create(name, birthDayString);
		const age = user.getAge();

		return { name, age };
	};
}
