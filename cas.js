
class Person {

	constructor(name, email, phone) {
	this.name = name;
	this.email = email;
	this.phone = phone;
}
	displayEmail() {
		console.log(this.email);
}

    mergeName (){
    return this.name + this.phone;
}
}

const person = new Person("Branimir", "m@m.com", "065608999");
person.displayEmail();

console.log(person.name);
console.log(person.mergeName());

