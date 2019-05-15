//emitter.js
const Emitter = function() {
	this.events = {};
};

Emitter.prototype.on = function(type, callback) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(callback);
};

Emitter.prototype.emit = function(type, data) {
	if (this.events[type]) {
		this.events[type].forEach(callback => {
			callback(data);
		});
	}
};

module.exports.Emitter = Emitter;
