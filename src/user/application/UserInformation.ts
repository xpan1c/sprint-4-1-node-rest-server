import "dotenv/config";

import { User } from "../domain/User";

export class UserInformation {
	getUserInfo = (): { name: string; age: number; pass: string } => {
		const name = process.env.USER_NAME;
		if (!name) {
			throw new Error("Name is not defined");
		}
		const birthDayString = process.env.USER_BIRTHDAY;
		if (
			!birthDayString ||
			!birthDayString.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
		) {
			throw new Error(`Data does not match, the format is "yyyy-mm-dd"`);
		}
		const pass = process.env.USER_PASSWORD;
		if (!pass) {
			throw new Error("Name is not defined");
		}
		const user = User.create(name, birthDayString);
		const age = user.getAge();

		return { name, age, pass };
	};
}
