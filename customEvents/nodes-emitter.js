//index.js
const Emitter = require('events');

const emitr = new Emitter();

emitr.on('customEvent', function(data) {
	console.log('Holla, data is: ', data);
});

for (let i = 0; i < 3; i++) {
	emitr.emit('customEvent', {
		name: 'maxBigBudget',
		valueI: i,
	});
}
