let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number : "));

// for (let i = 1; i <= n; i++) {
//   console.log("Hello World");
// }

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// Table
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} X ${i} = ${n * i}`);
// }

//sum of n number
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// Factorial
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// Sum of even and Sum of Odd in a range
// let start = Number(prompt("Enter start "));
// let end = Number(prompt("Enter End "));

// let evenSum = 0;
// let oddSum = 0;

// if (end < start) {
//   let temp = start;
//   start = end;
//   end = temp;
// }

// for (let i = start; i <= end; i++) {
//   if (i % 2 == 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }

// console.log("Even Sum : " + evenSum);
// console.log("Odd Sum : " + oddSum);

// Factor of a number
function factor() {
  let num = Number(prompt("Enter a number "));

  for (let i = 1; i <= num / 2; i++) {
    //kisi bhi number ka factor uske half tak hi hota hai and vo number itself jese 10 ka factor (1,2,5 and 10) isiliye hum loop ko half time hi run karenge aur isse loop half time hi chlega jisse time bhi bachega and last me us number ko khud print kar denge
    if (num % i == 0) {
      process.stdout.write(i + " ");
    }
  }

  console.log(num);
}
// // Prime Number
function primeNumber1() {
  let num = Number(prompt("Enter a number : "));
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count == 2) console.log("Prime");
  else console.log("Not Prime");
}

function primeNumber2() {
  let num = Number(prompt("Enter a number : "));
  let count = 0;
  if (num <= 1) console.log("Not Prime");
  else {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) count++;
    }
    if (count == 0) console.log("Prime");
    else console.log("Not Prime");
  }
}

function primeNumber3() {
  let num = Number(prompt("Enter a number : "));

  if (num <= 1) console.log("Not Prime");
  else if (num == 2) console.log("Prime");
  else if (num % 2 == 0) console.log("Not Prime");
  else {
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
      if (num % i == 0) {
        console.log("Not Prime");
        break;
      }
    }

    console.log("Prime");
  }
}

primeNumber3();
