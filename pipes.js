const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/big-file.txt', 'utf8');
const writableStream = fs.createWriteStream(__dirname + '/pipe-stream.txt');

//pipe from readable
readStream.pipe(writableStream);
