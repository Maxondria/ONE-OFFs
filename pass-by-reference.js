// let x = "a";
// let y = "a";
// let z = x;//this is not a copy,

//Let's look at it from objects
let names = [
    'max','bob','isaac','rashid'
];

let f = function(array) {
    //some code... 
    //doing anything to this variable 'arr' will actually mutate its value above
    //best thing to do here is create copies here
    let x = [...array]; 
    let y = Array.from(array);
    let r = [].concat(array);

    console.log(x, y, r);

};

f(names);
console.log("Main Array: ",names);