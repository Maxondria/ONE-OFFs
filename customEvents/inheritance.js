const EventEmitter = require('events');
const utils = require('util');

function Greetr(name) {
    //define this just in case
    EventEmitter.call(this);
	this.name = name;
}

utils.inherits(Greetr, EventEmitter);

//now, i can define own prototypes to these objects formed
Greetr.prototype.greet = function(data) {
    //can even call emit here
    this.emit('HOLLA',data);
	console.log('Hey, ' + this.name, 'here is your data:' + JSON.stringify(data));
};

//so,
const newOBJ = new Greetr('Max');

newOBJ.on('HOLLA', (data) => {
    console.log(data);
});

//calling this will emit OBJ
newOBJ.greet({
    holla: 'data'
});

// for (let i = 0; i < 2; i++) {
// 	newOBJ.emit('HOLLA', {
// 		somedata: 'new data',
// 	});
// }
