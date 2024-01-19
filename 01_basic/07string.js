const name = "Jahid";
const repoCount = 31;

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // backtick(``)

const gameName = new String("Jahid-hasan");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf("h"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

let newText = "jfdksfjfdklsajf  ";
console.log(newText.trim());

const url = "https://jahid$facebook.com";

console.log(url.replace("$", "-"));

console.log(url.includes("jahid"));

console.log(gameName.split("-"));
