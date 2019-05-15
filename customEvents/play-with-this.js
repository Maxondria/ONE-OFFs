const util = require('util');

const Person = function() {
	this.firstname = 'Max';
	this.lastname = 'Doe';
};

Person.prototype.greet = function() {
	console.log('Hello', this.firstname);
};

const Policeman = function() {
    //magic - define this keyword here - SAME AS SUPER (extends and super)
    //By doing so, we are defining this of this child object
    //meaning, since this inherits, this will point to parent and here!!!
    Person.call(this);
	this.badge = 1234;
};

util.inherits(Policeman, Person);

const policeman = new Policeman();
policeman.greet();

co