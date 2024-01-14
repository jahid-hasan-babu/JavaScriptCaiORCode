const marvelHeros = ["Batman", "CaptainAmerica"];
const dc_heros = ["Superman", "Batman"];
marvelHeros.push(dc_heros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dc_heros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dc_heros]; // ...spread operator

// console.log(allNewHeros);

const anotherArray = [1, 2, 4, [1, 2, 4, [1, 2, 4]]];
const ans = anotherArray.flat(Infinity);
// console.log(ans);

console.log(Array.isArray("Jahid"));
console.log(Array.from("Jahid"));
console.log(Array.from({ mame: "Jahid" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
