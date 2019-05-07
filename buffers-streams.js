//buffer - temporary storage for a chunk of data that is being transferred from one place to another
//stream - after buffer is full, it passes the data down the stream to where its headed
//increase performance in node
const fs = require('fs');


/**
 * READABLE STREAMS
 * Allow Node JS to read data from a stream
 * ! Important
 */

 /**
 * WRITABLE STREAMS
 * ! Important
 */

const readStream = fs.createReadStream(__dirname + '/big-file.txt', 'utf8');
const writableStream = fs.createWriteStream(__dirname + '/writable-stream.txt');


    //read and write to some file 
    readStream.on('data', chunk => {

        console.log("NEW CHUNK RECEIVED");
        console.log(chunk);
    
        writableStream.write(chunk); //create new file
    });



/**
 * DUPLEX
 * ! Both
 */
