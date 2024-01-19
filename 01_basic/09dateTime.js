//Date
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 13, 7, 5);
let myCreateDate = new Date("2024-01-13");

// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getMonth());

newDate.toLocaleString("default", {
  weekday: "long",
});
