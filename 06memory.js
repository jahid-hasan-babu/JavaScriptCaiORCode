//Memory

// Stack (Primitive), Heap (Non-Primitive)

//In stack give us copy data
let name = "Jahid";
let anotherName = name;
anotherName = "hasan";

console.log(name);
console.log(anotherName);

//Heap give us original data

let user1 = {
  name: "Jahid",
  email: "adb@gmail.com",
};

let user2 = user1;

user2.email = "abc@google.com";

console.log(user1.email);
console.log(user2.email);
