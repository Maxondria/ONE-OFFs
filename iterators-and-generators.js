let log = console.log;
let characters = ['Fin', 'Poe', 'Max', 'Big', 'Budget', 'Kun'];

//#region first Example
// function* genny() {
// 	yield 'a';
//     yield 'b';
//     //return; //from this point on, everything else is undefined
// 	yield 'c';
// 	yield 'd';
// }

// let iter = genny(); //genny() just gets ready
// log(iter.next());//a
// log(iter.next());//b
// log(iter.next());//c
// log(iter.next());//d

//runs as it is pausing on every value until there is nothing more to 'yield'
//this will switch done() to true, and yield unfined

//#endregion

//#region use Array
//use array
// function* genny2 () {
//   yield characters[5];
//   yield characters[3];
//   yield characters[0];
//   yield characters[1];
//   yield characters[4];
//   yield characters[2];
// }

// let iter2 = genny2();
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
//#endregion

