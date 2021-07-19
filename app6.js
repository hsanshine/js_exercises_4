"use strict";

let rabbit = {}; // an object
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
}; // finished the function expression definition

rabbit.speak("I am alive");

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}`);
}

let whiteRabbit = { type: "white", speak }; // we have an object called white rabbit of type 'white and property taking on the value of function speak
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now");

//you can call the propery on an object using the 'call' method of all functions

speak.call(hungryRabbit, "Burp");

// the arrow function can access 'this' parameter from its mother function but defining a function using the 'function' key word means it does not look outside for the 'this' parameter and considers the one it has its own and you must give it an object for it to execute properly
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
  //this in the normalize function will be the object that is given to this function when it is called
  // this in the arrow function is the same as 'this' in the outer function
} // the function maps the arrays coords of the object to return a new array of the elements divided by their length

normalize.call({ coords: [0, 2, 3], length: 5 });

//protypes, most objects have prototypes
let empty = {};
console.log(empty.toString); // [function : toString]
console.log(empty.toString()); // [object: object]

console.log(Object.getPrototypeOf({}) === Object.prototype);
//the empty prototype is from the acenstral default object prototype

console.log(Object.getPrototypeOf(Object.prototype)); //it is the first prototype so it does not have a prototype

//functions come from Function.prototype
console.log(Object.getPrototypeOf(Math.max) === Function.prototype);

//arrays all come from the default Array.prototype and this provides some default parameters like toString
console.log(Object.getPrototypeOf([]) === Array.prototype);

//will be a container for all properties tha are shared by all rabbits
let protoRabbit = {
  speak(line) {
    // look at this short way to create a method in an object
    console.log(`The ${this.type} rabbit says '${line}`);
  },
};

let killerRabbit = Object.create(protoRabbit); // we use the protoRabbit object as our prototype with default methods and properties
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");

//console.log("here we go", killerRabbit.toString());

//the constructor function for the protoRabbit prototype looks like this, if we define it ourselve, but this was actually inbuilt already and we don't do it this way
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit); // make a rabbit from the protoRabbit.
  //this is its prototype object from which it creates
  rabbit.type = type;
  return rabbit;
}

console.log(console.log); // [function: log]

//using the inbuilt prototype

function Rabbit(type) {
  this.type = type; // it will help us to construct rabbits, but it doesn't know yet what prototype it will be using
}

//we will add the property 'speak' to the default prototype from which this function will be deriving from
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}; //end of function expression

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("I am weird rrrrraaaaaah!");

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype); //returns true

console.log(Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype); // returns true
// the weird Rabbit is derived from the object stored in the prototype property of its construtor function

// new notation for js classes... they are still construtor functions with a property called prototype of the object they are building from

class RabbitClass {
  constructor(type) {
    this.type = type;
  }
  // we include this method here as a property, the name of the property will be the name of the function... this is a short cut for defining function value in objects
  speak(line) {
    console.log(`This ${this.type} rabbit says '${line}'`);
  } //this method was added as a property to the object prototype
}

let redRabbit = new RabbitClass("red");
let blackRabbit = new RabbitClass("black");
redRabbit.speak("I am red as hell");
blackRabbit.speak("I am black");

// using the class key word to create a class expression

let object = new (class {
  getWord() {
    return "hello";
  }
})();

console.log(object.getWord());

RabbitClass.prototype.teeth = "small";
console.log(redRabbit.teeth);
redRabbit.teeth = "small and red"; //we over write the property in the prototype object
console.log(redRabbit.teeth);
console.log(RabbitClass.prototype.teeth);

// toString is different for arrays because it was also over written
console.log(Array.prototype.toString === Object.prototype.toString);

console.log([1, 2, 3].toString());
console.log(Object.prototype.toString.call([1, 2, 3])); // it will tell you the object is an array and it does not know about it

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};

console.log(`Julia is ${ages["Julia"]}`); // she is 62
console.log(`Is Jack's age known? ${"Jack" in ages}`); //not there
console.log(`Is toString's age known? ${"toString" in ages}`); // yes

console.log("toString" in Object.create(null)); // create the object from the null prototyppe

//using the Map class is better and makes more sense than using the object as your map
let agesMap = new Map();
agesMap.set("Boris", 39);
agesMap.set("Julia", 62);
agesMap.set("Liang", 22);

console.log(`Julia is ${agesMap.get("Julia")}`);
console.log(`Is Jack's age known? ${agesMap.has("Jack")}`);
console.log(agesMap.has("toString"));

console.log({ x: 1 }.hasOwnProperty("x")); //true
console.log({ x: 1 }.hasOwnProperty("toString")); //false, hasOwnProperty ignores the properties of the prototype objects

//my own version of toString using polymorphism
RabbitClass.prototype.toString = function () {
  // we change the contents of toString which came with its prototype
  return `a ${this.type} rabbit`;
};

console.log(String(redRabbit)); // Stirng() called on an object relies on its toString method to turn that object to a string, otherwise it would not know how

let sym = Symbol("name");
console.log(sym == Symbol("name"));

RabbitClass.prototype[sym] = 55; // we create a new property called sym on the prototype object of the RabbitClass
console.log(redRabbit[sym]); // we can't use dont convention here because sym is like an expression... not a legal property name which should be a string

console.log(sym); // it returns that it is a symbol for name

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }, // the sqaure brackets evaluate the expression put inside them to return the value it contains or it is equivalent to, in this case 'toString'
};

console.log(stringObject[toStringSymbol]()); //we use the squre brackets here instead of the dot convention because we are trying to access a property of the stringObject

// checking out the Symbol.iterator

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    //this is just the default value of the element function and it can over written to give some other initial values
    this.width = width;
    this.height = height;
    this.content = []; //we save the elements in a single long array at position x*y,everything is zero based..

    //setting the initial values as undefined
    for (let y = 0; y < height; y++) {
      // number of rows and is the length of columns
      for (let x = 0; x < width; x++) {
        //number of columns and length of rows
        this.content[y * width + x] = element(x, y); // it sets everything in the matrix as undefined
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x]; // retrieve in O(1) time the value from you array
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value; // set the value in O(1) time
    //
  }

  [Symbol.iterator] = function () {
    return new MatrixIterator(this);
  }; // will be found by the for/of loop to iterate the object
  // this is the interface the for/of loop needs to do its work
}

class MatrixIterator {
  constructor(matrix) {
    // iterator properties for the matrix iterator
    this.x = 0; //starts iteration at x = 0
    this.y = 0; // starts iterations at y = 0
    this.matrix = matrix; //the matrix to be iterated
  }
  //it has a next method, declared with the shorthand for declaring methods in  objects
  next() {
    if (this.y == this.matrix.height) return { done: true }; //we already reached the end

    //the value returned at each point of the iteration, we want the current position and current value at every point in the iteration
    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    //update the values of x and y after providing the current one and their value
    this.x++;
    if (this.x == this.matrix.width) {
      // time to go to the next row
      this.x = 0;
      this.y++;
    }
    return { value, done: false }; // value is the property name and it gets it value from the value binding
  }
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let { x, y, value } of matrix) {
  // as long as the matrix has the [Symbol.iterator] method it can be iterated by the for/of loop
  //this  method should provide the expected controls like next() that this loop requires to do its work
  console.log(x, y, value);
}

console.log(String(toStringSymbol)); // the string that was used with the symbol function is used to keep track of what symbol it is otherwise it has no other meaning beyond that and multiple symbols can have the same name as long as they are made from different strings.

// getters and setters
// some interfaces have properties that are not functions/
// these properties may hide the functions that give them their values

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100); // will be a number from zero to 99 unless you add one then it will be a number from 1 to 100.
  },
};

console.log(varyingSize.size);
console.log(varyingSize.size);

// getters and setters and statics
class Temperature {
  constructor(celsius) {
    console.log(`making temp object with a temp of ${celsius}`);
    this.celsius = celsius; // we only store the temperature as celcius values
  }
  get fahrenheit() {
    // we can give you the fahrenheit temp by converting from celsius
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    // we can set the celsius value from a fahr value you provide
    this.celsius = (value - 32) / 1.8; // even if you want your temp in fahr, we only store in celcius
  }
  // to create a temp object from a fahrenheit vlaue we provide this static method on our constructor
  static fromFahrenheit(value) {
    // static methods live in the constructor and are called from the constructor
    return new Temperature((value - 32) / 1.8); // allows you to call the constructor and set the temperature of the temperature object ( our custom data type that stores temperature) as a fahrenheit value
  }
}

let temp = new Temperature(22); //provided in celsius
console.log(temp.celsius);
console.log(temp.fahrenheit); // will provide the current temp  in fahrenheit
temp.fahrenheit = 86;
console.log(temp.celsius);

//=====================================================================================//
//exercies...

//a vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(x, y) {
    return new Vec(this.x + x, this.y + y);
  }
  minus(x, y) {
    return new Vec(this.x - x, this.y - y);
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let myVec = new Vec(2, 2);
console.log(myVec.plus(2, 2));
console.log(myVec.minus(2, 2));
console.log(myVec.length);

//=================================================================================//
