//Leap Year

let prompt = require("prompt-sync")();

// Taking Input from terminal 
let year = Number(prompt("Enter a year : "));

if (year % 4 == 0 && year % 100 != 0) {
  console.log("Leap Year");
} else if (year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
