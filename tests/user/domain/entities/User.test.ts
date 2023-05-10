import { UserValue } from "../../../../src/user/domain/user.value";

describe("User", () => {
	test("given a User with a name passed by contructor, when its called to sayHello method, should return a greeting message", () => {
		const name = "Pepito";
		const birthDayString = "1989-12-12";
		const birthDay = new Date(birthDayString);
		const user = new UserValue({ name, birthDay });
		const expectedGreeting = "Hello, I am Pepito";

		const greeting = user.sayHello();

		expect(greeting).toBe(expectedGreeting);
	});
});
