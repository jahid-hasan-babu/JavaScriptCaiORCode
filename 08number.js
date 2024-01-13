//Number and Math

const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber = 255.56054;

console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toExponential(2));

const hundred = 1000000;

console.log(hundred.toLocaleString("en-IN"));

// Math

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.8));
console.log(Math.min(4, 5, 8));
console.log(Math.max(5, 74, 5));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
