/**
 * Level 1
 */

// 1. Area of a circle

function areaOfCircle(r) {
  let area = Math.PI * Math.pow(r, 2);
  console.log(area);
}

// areaOfCircle(30);

// 2. Area of a triangle

function areaOfTriangle(b, h) {
  let area = (1 / 2) * b * h;
  console.log(area);
}


// areaOfTriangle(10, 5);
// areaOfTriangle(10, 50);

// 3. Area of Rectangle

function areaOfRectangle(l, w) {
  let area = l * w;
  console.log(area);
}
// areaOfRectangle(8, 4);

// 4. Area of an Isosceles Triangle

function areaOfTriangle2(b, h) {
  let area = (1 / 2) * b * h;
  console.log(area);
}

// areaOfTriangle2(6,4)

// 5. Area of a Parallelogram

function areaofParallelogram(b, h) {
  let area = b * h;
  console.log(area);
}

// areaofParallelogram(10, 3);

// 6.  Area of a Rhombus

function areaOfRhombus(d1, d2) {
  let area = (d1 * d2) / 2; //Using Diagonal

  console.log(area);
}
// areaOfRhombus(10, 8);

// 7. Area of an Equilateral triangle

function areaOfEqulateral(a) {
  let area = (Math.sqrt(3) / 4) * (a * a);
  // Root of 3 divided by 4 multipied by side length(a)
  console.log(area);
}

// areaOfEqulateral(6)

// 8. Perimeter of a Circle

function perimeterOfCicle(r) {
  let perimeter = 2 * Math.PI * r;
  console.log(perimeter);
}

// perimeterOfCicle(7);

// 9. Perimeter of an Equilateral Triangle

function perimeterOfEqui(a) {
  let perimeter = 3 * a;

  console.log(perimeter);
}

// perimeterOfEqui(5)

// 10. Perimeter of a rectangle

function perimeterOfRect(l, w) {
  let perimeter = 2 * (l + w);

  console.log(perimeter);
}

// perimeterOfRect(10,5)

/**
 * Level 2
 */

// 11. Volume of a Cone

function volumeOfCone(r, h) {
  let volume = (1 / 3) * (Math.PI * (r * r) * h);

  console.log(volume);
}
// volumeOfCone(3,5)

// 12. Volume of a Cylinder

function volumeOfCylinder(r, h) {
  let vol = Math.PI * (r * r) * h;

  console.log(vol);
}
// volumeOfCylinder(2,7)

// 13. Volume of a Sphere

function volOfSphere(r) {
  let vol = (4 / 3) * (Math.PI * Math.pow(r, 3));

  console.log(vol);
}

// volOfSphere(4)

// 14. Volume of a Pyramid

function volOfPyramid(b, h) {
  let vol = (1 / 3) * (b * h);
  console.log(vol);
}

// volOfPyramid(20,6)

//  15. Total Surface Area of a Cube

function surfaceOfAreaofCube(a) {
  let surface = 6 * (a * a);
  console.log(surface);
}

// surfaceOfAreaofCube(5)

/**
 * Level 3
 */

// 16. Fibonacci Series

function fibonacciSeries(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 0; i < n; i++) {
    let next = prev + curr;
    console.log(prev);

    prev = curr;
    curr = next;
  }
}

// fibonacciSeries(10);

// 17. Subtract Product and Sum of Digits

function subProductSum(num) {
  // Initialize the product and sum
  let product = 1;
  let sum = 0;

  while (num > 0) {
    let lastDigit = num % 10; //Find last digit
    product = product * lastDigit; //Multiply it with product
    sum = sum + lastDigit; //Add it with sum
    num = Math.floor(num / 10); //remove the last digit
  }

  let result = product - sum; //Magic Happens Here(result)

  console.log(result);
}

// subProductSum(234);

// 18. Print all Factores

function factorOfNum(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
}

// factorOfNum(20)

// ## 19. Sum Until Zero

function sumTillZero() {
  let prompt = require("prompt-sync")();
  let num = Number(prompt("Enter Number : "));

  let sum = 0;
  while (num != 0) {
    sum = sum + num;

    if (num == 0) {
      break;
    }

    num = Number(prompt("Enter Number : "));
  }
  console.log(sum);
}

// sumTillZero();

// 20. Largest Number Until Zero

function largestTillZero() {
  let prompt = require("prompt-sync")();
  let num = Number(prompt("Enter Number : "));
  let largest;
  while (num != 0) {
    largest = num;

    if (num == 0) {
      break;
    }

    if (num > largest) {
      largest = num;
    }
    num = Number(prompt("Enter Number : "));
  }
  console.log("Largest Number : " + largest);
}

// largestTillZero();

// 21. Addition of Two Numbers

function sum(a, b) {
  return a + b;
}

// console.log(sum(5, 9));

/**
 * Level 4
 */

// 22. Factorial of a Number

function factorial(num) {
  if (num == 0) {
    return console.log("0");
  }
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  console.log(fact);
}
// factorial(5);

// 23. Average of N Numbers

function average() {
  const prompt = require("prompt-sync")();
  let length = Number(prompt("Enter length : "));
  let sum = 0;

  for (let i = 1; i <= length; i++) {
    let num = Number(prompt("Enter Number : "));
    sum = sum + num;
  }

  let average = Number(sum / length);

  console.log(average);
}

// average();

// 24. Discount Calculator

function finalPrice(price, discount) {
  let discountedPrice = (price * discount) / 100;
  let finalPrice = price - discountedPrice;

  console.log(finalPrice);
}
// finalPrice(1000, 20);

// 25. Distance Between Two Points

function distance(x1, y1, x2, y2) {
  let dxSq = Math.pow(x2 - x1, 2);
  let dySq = Math.pow(y2 - y1, 2);

  let distance = Math.sqrt(dxSq + dySq);

  console.log(distance);
}

// distance(0, 0, 3, 4);

/**
 * Level 5
 */

// 26. Armstrong Number

function isArmstrong(num) {
  let original = num;
  let digits = num.toString().length;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += Math.pow(digit, digits);
    num = Math.floor(num / 10);
  }

  if (sum === original) {
    console.log("Armstrong Number");
  } else {
    console.log("Not an Armstrong Number");
  }
}

// isArmstrong(153);

//  27. Reverse a String

function reverseString(string) {
  let revStr = "";

  for (let i = string.length - 1; i >= 0; i--) {
    revStr = revStr + string[i];
  }

  console.log(revStr);
}

// reverseString("hello");

// 28. Palindrome Number

function palindromeNum(num) {
  let originalNum = num;
  let palindromeNum = 0;

  while (num > 0) {
    let digit = num % 10;
    palindromeNum = palindromeNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (originalNum === palindromeNum) {
    console.log("True");
  } else {
    console.log("False");
  }
}
// palindromeNum(1221);
