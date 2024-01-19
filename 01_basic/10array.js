//array
//array returns shallow copies

const myArray = [0, 1, 2, 3];
const myHeros = ["Batman", "Spiderman"];
const myArray02 = new Array(1, 2, 3, 5);

// console.log(myArray[3]);
// myArray.push(5);
// myArray.pop();

// console.log(myArray);

// myArray.unshift(9); //add first in data
// myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(2));

// const newArr = myArray.join();
// console.log(myArray);
// console.log(newArr);

//slice splice

console.log("A", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
