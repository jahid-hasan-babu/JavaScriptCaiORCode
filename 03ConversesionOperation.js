// let score = "55abc";
let score = null;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //Number
console.log(valueInNumber); //NaN

// "55" => 33
// "55abb" => NaN type number
// true => 1 ; 0 => false (boolean)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false
// "" => false
// "Jahid" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
