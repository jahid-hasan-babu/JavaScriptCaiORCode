const tendaUser = new Object(); // singleton
const tindaUser = {}; //non singleton

tindaUser.id = "154abc";
tindaUser.name = "Jahid";
tindaUser.isLoggedIn = false;
// console.log(tindaUser);

const regularUser = {
  email: "jahid@gmail.com",
  fullName: {
    firstName: "Jahid",
    lastName: "hasan",
  },
};

// console.log(regularUser.fullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3= {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }; // ... ->is called spread operator

const user = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "abcd@gmail.com",
  },
];

user[1].email;

// console.log(obj3);

console.log(tindaUser);
console.log(Object.keys(tindaUser));
console.log(Object.values(tindaUser));
console.log(Object.entries(tindaUser));
console.log(tindaUser.hasOwnProperty("isLogged"));
