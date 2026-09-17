const prompt = require("prompt-sync")();
let n;
do {
  console.log("Enter 1 for Addition");
  console.log("Enter 2 for Substraction");
  console.log("Enter 3 for Multiplication");

  n = Number(prompt("Enter a number : "));

  switch (n) {
    case 1: {
      let a = Number(prompt("Enter first number : "));
      let b = Number(prompt("Enter second number : "));
      console.log("Addition : " + (a + b));
      break;
    }
    case 2: {
      let a = Number(prompt("Enter first number : "));
      let b = Number(prompt("Enter second number : "));
      console.log("Substraction : " + (a - b));
      break;
    }
    case 3: {
      let a = Number(prompt("Enter first number : "));
      let b = Number(prompt("Enter second number : "));
      console.log("Multiplication : " + a * b);
      break;
    }

    default:
      console.log("Wrong Input");
  }
  n = Number(prompt("Enter 10 to continue : "));
} while (n == 10);
