// Print number of days in a month
let prompt = require("prompt-sync")();

// Taking Input from terminal 
let month = Number(prompt("Enter a month : "));
let year = Number(prompt("Enter a year : "));
let days = 0;

if (month > 12) {
  console.log("Invalid Month");
  return;
} else {
  if (month == 2) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      days = 29;
    } else {
      days = 28;
    }
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    days = 31;
  } else {
    days = 30;
  }
}

console.log(days);
