// const A = 'hi';
// let reversedString = '';

// let ArrayFromA = A.split('');

// const length = ArrayFromA.length;

// for (let i = 0; i < length; i++) {
//    reversedString+=ArrayFromA.pop();
// }

// console.log(reversedString);
// console.log(A.split('').reverse('').join(''))

// const A = [1,2];
// Array.prototype.print = function() {
//     const newArr = this.toString();
//     console.log(newArr);
// }

// A.print();

//Creation of getters and setters in a normal constructor
// function a(a) {
// 	this.a = a;
//     Object.defineProperties(this, {
// 		_A: {
// 			get: function() {
// 				return this.a;
// 			},
// 			set: function(a) {
// 				this.a = a;
// 			},
// 		},
// 	});
// }

// const newObj = new a(2);

// console.log(newObj._A)
// newObj._A = 5;
// console.log(newObj._A)

class A {
	constructor(x) {
		this.x = x;
	}

	get getX() {
		return this.x;
	}
}

class B extends A {
	constructor(x, y) {
		super(x);
		this.y = y;
	}

	get getY() {
		return this.y;
	}
}

const newB = new B(2, 3);

console.log(newB.getX, newB.getY);

//Deep Cloning

const obj = {
	a: {
		b: {
			c: 1,
		},
	},
};
//
// const clone = JSON.parse(JSON.stringify(obj));
// clone.a.b.c = 5;

// console.log(obj.a.b.c); //1
// console.log(clone.a.b.c) //5
const clone = Object.create(obj); //empty obj but uses obj as prototype

const xx = [1, 2, 3, 4, 5, 6];
const xxx = [44, 55, 66, 77, 88, 99];

console.log([...xx, ...xxx]);

const obk = {
	x: 1,
	getx() {
		const inner = function() {
			console.log(this.x);
		};
		inner.bind(this)();
	},
};

obk.getx();
