const events = require('events');
const util = require('util');

const event = new events.EventEmitter();

event.on('CustomEvent', sameInfo => {
	console.log(sameInfo);
});

event.emit('CustomEvent', {
	name: 'Amax',
});

//inheritance
const Person = function(name) {
	this.name = name;
};
//util.inherits(constructor, superConstructor) --- Meaning all objects formed from Person can emit an listen to events
util.inherits(Person, events.EventEmitter);

const max = new Person('Max');

max.on('SomeOtherEvent', data => {
	console.log(`${max.name} emitted with: ${JSON.stringify(data)}`);
});

max.emit('SomeOtherEvent', {
	someOtherData: 'SomethingElse',
});


