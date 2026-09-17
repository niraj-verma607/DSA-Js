// Discount 

let prompt = require("prompt-sync")();

// Taking Input from terminal 
let amount = Number(prompt("Enter Amount : "));

let discount = 0;

if (amount > 0 && amount <= 5000) discount = 0;
else if (amount > 5000 && amount <= 7000) discount = 5;
else if (amount > 7000 && amount <= 9000) discount = 10;
else discount = 20;

console.log("Payable Amount : " + (amount - (discount * amount) / 100));
