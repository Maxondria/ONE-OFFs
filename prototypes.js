//INEFFICIENT CODE

// function personFactory(firstName, lastName) {
// 	return {
// 		firstName,
// 		lastName,
// 		greet(person) {
// 			return `Hello, ${person.firstName} ${person.lastName}`;
// 		},
// 	};
// }

// let John = personFactory('John', 'Doe');
// let Jane = personFactory('Jane', 'Smith');

//Better code One

// const personPrototype = {
// 	greet(person) {
// 		return `Hello, ${person.firstName} ${person.lastName}`;
// 	},
// };

// function personFactory(firstName, lastName) {
// 	const person = Object.create(personPrototype, {
// 		firstName: { value: firstName, writable: true, enumerable: true },
// 		lastName: { value: lastName, writable: true, enumerable: true },
// 	});

// 	return person;
// }

// let betterJohn = personFactory('John', 'Doe');
// let Jane = personFactory('Jane', 'Smith');

// console.log(betterJohn.greet(Jane));

//Even Better (Remove Prototype from global scope) --IIFE
let personFactory = (function() {
	const personPrototype = {
		greet(person) {
			return `Hello, ${person.firstName} ${person.lastName}`;
		},
	};

	return function(firstName, lastName) {
		//here, the prototype will be a closure, therefore it will stay
		const person = Object.create(personPrototype, {
			firstName: { value: firstName, writable: true, enumerable: true },
			lastName: { value: lastName, writable: true, enumerable: true },
		});

		return person;
	};
})();

//so personFactory now returns a function, with a closure(prototype)
//...staying even after executing the IIFE
//we there can call personFactory with our params

let bestJohn = personFactory('John', 'Doe');
let Jane = personFactory('Jane', 'Smith');

console.log(bestJohn.greet(Jane)); //same result...
