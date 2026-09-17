// Area of circle, area of triangle and area of rectangle
let prompt = require("prompt-sync")();
console.log("Enter 1 for area of rectangle");
console.log("Enter 2 for area of circle");
console.log("Enter 3 for area of triangle");
console.log("Enter 4 for area of square");

let n = Number(prompt());

switch (n) {
  case 1: {
    let len = Number(prompt("Enter Length of rectangle "));
    let bre = Number(prompt("Enter breadth of rectangle "));

    console.log("Area : " + len * bre);
    break;
  }

  case 2: {
    let radius = Number(prompt("Enter radius : "));

    console.log("Area : ", Math.PI * Math.pow(radius, 2));

    break;
  }

  case 3: {
    let a = Number(prompt("Enter 1st Side "));
    let b = Number(prompt("Enter 1st Side "));
    let c = Number(prompt("Enter 1st Side "));

    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log("Area : " + area);

    break;
  }
  case 4: {
    let side = Number(prompt("Enter side of square "));

    console.log("Area : " + side * side);
    break;
  }
  default: {
    console.log("Invalid Number");
  }
}
