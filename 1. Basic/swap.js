//Swap two variables using three Methos

// Method 1: Using a temporary variable

let a = 10;
let b = 20;
let temp;

temp = a;
a = b;
b = temp;
console.log("a = " + a);
console.log("b = " + b);

//Method 2 (Using Math)

let x = 10;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log("x = " + x);
console.log("y = " + y);

//Method 3

let c = 10;
let d = 40;

[c, d] = [d, c];

console.log("c = " + c);
console.log("d = " + d);
