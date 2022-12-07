
class Person {

	constructor(name, email, phone) {
	this.name = name;
	this.email = email;
	this.phone = phone;
}
	displayEmail() {
		console.log(this.email);
}
}



class Employee extends Person {
	constructor(name, email, phone, type, position, salary) {
        		super(name, email, phone);
		this.type = type;
		this.position = position;
		this.salary = salary;
}
}
const employee = new Employee ("Micko", "m@m.com", "065/608-999", "human", "employee", "1000");
employee.displayEmail();

