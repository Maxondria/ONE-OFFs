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

    x.push('maxondria');

    console.log(x, y, r);

};

// f(names);
// console.log("Main Array: ",names);

//--install cross-env (Support Mac and Windows)

let someObj = {
    characters: ['Max', 'Daniel','Some Other Dude'],
    info: {
        inner: true, 
        nums: [1,2,3]
    }
};

let g = (obj) => {
  let o = Object.assign({}, obj); //copy... 
  //Here, we are only copying pointers,'characters' and 'info' but not real values
  //This means whatever characters is pointing at, is the reference in memory of the original object
  
  //HOWEVER, if we mutate the pointer, say 'characters' of the 'obj' param, after o has been created already,
  //o's character will keep pointing at what was there before (when copy was taken)
  //by assigning 'characters' in obj a whole new value, you have changed it's reference
 
  //MAIN NOTE
  //Changing the value, using push(), affects everything copied or not, 
  //BUT changing pointer reference, doesn't affect copies before
  //and there after, since they are nolonger pointing to the same reference, mutating the values will mean
 //mutating two diffent values in two separate address... see below
 
 
  obj.characters = ['New Guy 1', 'new Guy 2']; //wont affect o here, any other mutations will affect new reference in obj not o

  obj.characters.push('SomethingWElse'); //this has been added to the new One above, O still remains unattached

 //but still, 'characters' and 'info 'are still pointing to the same values (
//array ['Max', 'Daniel','Some Other Dude'] and 
     //{
    //     inner: true, 
    //     nums: [1,2,3]
    // } )
 //so, 

 obj.info.inner = false; //will have an effect on o, too
 console.log('o', o);
 console.log('obj', obj);

//  o { characters: [ 'Max', 'Daniel', 'Some Other Dude' ],
//   info: { inner: false, nums: [ 1, 2, 3 ] } }


// obj { characters: [ 'New Guy 1', 'new Guy 2' ],
//   info: { inner: false, nums: [ 1, 2, 3 ] } }
};

let newObj = g(someObj);