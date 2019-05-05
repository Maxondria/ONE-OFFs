/*jslint node: true */
//'use strict';

let bob = function(num, str) {
	//without "use strict", this will point to window of course
	console.log('bob', num, str, this);
	return true;
};

let bill = {
	name: 'Bill Murray',
	movie: 'Prison Break',
	myMethod: function(fn) {
        // let num = arguments[1];
        // let str = arguments [2];

        // fn.apply(bill, [num, str]);

        //with bind here, it means we have put these to it already so execute it straight without arguments
        fn();
    },
};

//bob(2, 'Any String'); // runs well

//method.call(context, arguments);, call has context(where 'this' points), 
//and function arguments/params as defined by our function

//bob.call(window, 2, "Any string"); //this points to 'window' still
//bob.call(bill, 2, "goodbye"); //this now points to bob

//apply means the same thing but arguments will instead be combined into an array

//method.apply(context, [arguments]); -- As Seen Here

//bob.apply(window, [100, "Any string"]);// and it will still work well without modifying our bob function

//what if we want bill.myMethod to be equal to have bob as argument
//bill.myMethod(bob, 2, "anyString"); //these will be passed in as 
//arguments array [bob -0 indx, 2- 1 indx, "mystring"- 2 indx]
//in our case above, bob will be treated as fn, the rest as its arguments


//bind works the same way but can be saved in a variable for reuse

let fred = bob.bind(bill, 2, "Any String"); 
// this wont run but just prepares this function to used later,
//therefore running fred anywhere will not require any arguments and will run straight up

//Eg.
bill.myMethod(fred);
