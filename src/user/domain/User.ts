import { IUser } from "./IUser";

export class User implements IUser {
	private readonly birthDay: Date;
	constructor(private readonly name: string, birthDay: string) {
		this.birthDay = new Date(birthDay);
	}

	static create(name: string, birthDay: string): User {
		return new User(name, birthDay);
	}

	getName(): string {
		return this.name;
	}

	getAge(): number {
		const today = new Date();
		let age = today.getFullYear() - this.birthDay.getFullYear();
		const m = today.getMonth() - this.birthDay.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < this.birthDay.getDate())) {
			age--;
		}

		return age;
	}
}
