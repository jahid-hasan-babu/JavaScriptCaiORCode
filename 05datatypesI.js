// #  Primitive
// 7 types: String, Number , Boolean, Null, undefined , Symbol ,BigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigInt = 1235612745241545244784n; //to create bigNumber

//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Batman", "Spiderman"]; // Array

//Object
let myObj = {
  name: "Jahid",
  phone: 1012154,
};

//function
const myFunc = function () {
  console.log("Hello world");
};
