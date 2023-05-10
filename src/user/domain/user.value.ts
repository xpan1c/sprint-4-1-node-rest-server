import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
	name;
	age;
	constructor({ name, age }: { name: string; age: number }) {
		this.name = name;
		this.age = age;
	}

	sayHello(): string {
		return `Hello, I am ${this.name}`;
	}
}
