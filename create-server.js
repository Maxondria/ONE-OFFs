const { createServer } = require('http');
const { createReadStream } = require('fs');

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });

	//use pipe to send back response
	const readStream = createReadStream(__dirname + '/big-file.txt', 'utf8');

	//pipe from readable to response in bits
	readStream.pipe(res);
});

server.listen(7999, '127.0.0.1', () => {
	console.log('server listening on port 7999');
});
