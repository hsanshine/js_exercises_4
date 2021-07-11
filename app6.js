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

//the constructor function for the protoRabbit prototype looks like this
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

console.log(console.log); // [function: log]
