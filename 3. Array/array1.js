// Taking input in an array

let prompt = require("prompt-sync")();

let n = Number(prompt("Enter size of array : "));
let arr = new Array(n);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt("Enter a value : "));
}
console.log(arr);
