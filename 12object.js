// singleton

// object literals
// Object.create
const mySm = Symbol("key1");

const jsUser = {
  name: "Jahid",
  fullName: "Jahid hasan",
  [mySm]: "myKey1",
  age: 18,
  location: "Panchagarh",
  email: "abc@gmail.com",
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySm]);

jsUser.email = "jahid@gmail.com";
// Object.freeze(jsUser);

jsUser.email = "jhb@gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello JS user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS user , ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
