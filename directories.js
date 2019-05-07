const fs = require('fs');

/**
 * SYNC METHOD
 * * Creates a directory
 */
// console.log('before-remove');
//fs.rmdirSync('created-async'); //removes
// console.log('removed');
// fs.mkdirSync('created-sync'); //creates / returns error if it already exists
// console.log('after-created');

/**
 * ASYNC METHODS
 */
//! remove file first
// fs.unlink('./created-async/brand-new.txt', error => {
// fs.rmdir('created-async'); //removes
// }); //as long as it exists...else you will get an error

//? WE CAN EVEN USE ABSOLUTE PATHS

const mkdir = fs.mkdir('./created-async', () => {
	fs.readFile('./read-me-async.txt', 'utf8', (error, chunk) => {
      // * write file in this directory
		fs.writeFile('./created-async/brand-new.txt', chunk, err => {
			console.log(err);
		});
	});
});
