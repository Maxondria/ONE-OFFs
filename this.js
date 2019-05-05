/*jslint node: true */
//"use strict";

let box = document.querySelector('.box');
let log = console.log;

//this keyword in a normal js fuction not arrow,
//points to the context of who called the function

//in myFunc() therefore, if we trigger the fuction by clicking box, this will point to 'box' above
let myFunc = function() {
    log('1', this); 
    
    setTimeout(() => {
        //in this callback, this will point to whatever it's parent was pointing to, 
        //in this case, if "use strict", parent will be pointing to 'undefined', 
        //therefore, this here will still point to undefined,
        //However if context was defined with call(), this will also point to this scope
        //Eg: Calling myFunc.call(box) or myFunc.call(window), this will point to this too

        //But if "use strict" was not active, and we call myFunc() 
        //this will point to it's parent's context wich is window

        //Also, if myFunc() is triggered by clicking on box, 
        //it means this was pointing at 'box', which is what this in the setTimeout will point to, too.
        log('4', this);
    }, 1000);
};

//in fat arrow functions however, regardless of who called the fuction
//'this' will always point to the context of its parent declaration
//in the case below, myFunc is the parent and its declared in the "lexical scope" or global namespace,
//therefore, 'this' points to the 'window' object
let myFunc2 = () => {
    log('2', this);
    
    setTimeout(() => {
        //in this callback, this will point to whatever it's parent was pointing to, 
        //in this case, myFunc is fat arrow, which means it was pointing to global namespace,
        //therefore, this here will still point to the 'window' object
        log('3', this);
    }, 1000);
};

box.addEventListener('mousedown', myFunc);
box.addEventListener('mouseup', myFunc2);

//calling myFunc() directly, this will point to the global namespace because
//that's whats calling the function, it is called in the lexical scope,

//myFunc(); - will point to 'window'

//however if we define the context of 'this' by using call() to call 'myFunc',
//'this' will point to that context, in our case the 'box'

//myFunc.call(box); - will point to box
//myFunc.call(window); - will point to window

//But still with fat arrow fuctions, this will keep pointing the global namespace

//myFunc2.call(box); - will point to 'window'

//However with  'use strict', it will deny the normal function, the 'window' object
//until we define it ourselves, but it won't affect the fat arrow function;

//Example, With "use strict" ON,

//myFunc() - will be undefined
//myFunc.call(window) - will point to 'window', because we defined it
//myFunc.call(box); - will point to 'box'
//myFunc2() - will still point to 'window'