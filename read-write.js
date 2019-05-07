const fs = require('fs');

/**
 * SYNC METHODS - block code until finished, then the rest continue
 */
const readsync = fs.readFileSync('readme.txt', 'utf8');

//write contents of the const readsync to a new file
fs.writeFileSync('wroteMe.txt', readsync);

/**
 * ASYNC METHODS - Proceed, come back later 
 * ! This takes a callback as the 3rd param,
 *  *This callback takes in two @params (error, chunk)
 */
const readAsync = fs.readFile('read-me-async.txt', 'utf8', (error, chunk) => {
    if(error){
        console.log(error);
        return;
    }

    //! must have a callback too
    fs.writeFile('wroteMeAsync.txt', chunk, (e) => {
       if(e)  console.log(e);
    });
});
console.log('Fires before reading the file');