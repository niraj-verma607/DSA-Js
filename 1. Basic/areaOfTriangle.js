//Area of Triangle using heron's formula

let a = 50;
let b = 60;
let c = 70;

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

area = area.toFixed(2);

console.log("Area of the triangle is: " + area);
