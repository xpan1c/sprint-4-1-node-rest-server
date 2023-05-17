import { User } from "../../../../src/user/domain/User";

describe("User", () => {
	test("given a User with a name passed by contructor, when its called to sayHello method, should return a greeting message", () => {
		const name = "Pepito";
		const birthDayString = "1989-12-12";
		const user = new User(name, birthDayString);
		const expectedGreeting = "Hello, I am Pepito";
	});
});
