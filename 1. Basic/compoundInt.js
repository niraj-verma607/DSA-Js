// Compound Interest Calculation


//Taking Input from terminal 
let prompt = require("prompt-sync")();

let p = prompt("Enter Principal Amount: ");
let r = prompt("Enter Rate of Interest: ");
let t = prompt("Enter Time in Years: ");

let ci = p * Math.pow(1 + r / 100, t) - p;

ci = ci.toFixed(2);

console.log("Compound Interest is: " + ci);
