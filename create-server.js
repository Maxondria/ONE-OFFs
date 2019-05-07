const { createServer } = require('http');

const server = createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
	});

	res.end('Hey Bro...');
});

server.listen(7999, '127.0.0.1', () => {
	console.log('server listening on port 7999');
});
