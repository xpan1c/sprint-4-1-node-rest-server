import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
	name;
	birthDay;
	constructor({ name, birthDay }: { name: string | null; birthDay: Date | null }) {
		this.name = name;
		this.birthDay = birthDay;
	}

	sayHello(): string {
		return `Hello, I am ${this.name}`;
	}
}
