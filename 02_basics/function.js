function sayMyName() {
  console.log("J");
  console.log("a");
  console.log("h");
  console.log("i");
  console.log("d");
}

// sayMyName();

// function addTowNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTowNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  //   console.log("Jahid"); //did not work after return

  return number1 + number2;
}
addTowNumbers(2, 5); //arguments

const result = addTowNumbers(2, 8);

// console.log(result);

function loginUserMessage(userName = "hasan") {
  return `${userName} Just logged in`;
}

console.log(loginUserMessage("Jahid"));
// console.log(loginUserMessage()); -> return undefined
