// Bijli Bill (Brute Force)
let prompt = require("prompt-sync")();

// Taking Input from terminal 
let unit = Number(prompt("Enter Unit : "));

if (unit > 0 && unit <= 100) {
  console.log(unit * 4.2);
} else if (unit > 100 && unit <= 200) {
  console.log(100 * 4.2 + (unit - 100) * 6);
} else if (unit > 200 && unit <= 400) {
  console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
} else {
  console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
}

// Optimized Approuch

let amount = 0;

if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount = amount + (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount = amount + (unit - 100) * 6;
  unit = 100;
}

amount = amount + unit * 4.2;

console.log(amount);
