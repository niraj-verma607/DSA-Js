const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number : "));
let ans = 0;
let original = num;

while (num > 0) {
  let digit = num % 10;
  let fact = 1;

  for (let i = 1; i <= digit; i++) {
    fact = fact * i;
  }
  ans = ans + fact;
  num = Math.floor(num / 10);
}

if (original == ans) {
  console.log("Strong Number");
} else {
  console.log("Not Strong Number");
}
