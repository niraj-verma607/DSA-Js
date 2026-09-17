let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number : "));

function sumOfDigit(n) {
  let sum = 0;
  while (n > 0) {
    let num = n % 10;
    sum += num;
    n = Math.floor(n / 10);
  }

  console.log(sum);
}

// sumOfDigit(n);

function reverseNumber(n) {
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }

  console.log(rev);
}

// reverseNumber(n);

function ISBNNum(n) {
  let copy = n,
    count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  if (count != 10) {
    console.log("Invalid ISBN");
  } else {
    let ans = 0;
    while (copy > 0) {
      let digit = copy % 10;
      ans = ans + digit * count;
      count--;
      copy = Math.floor(copy / 10);
    }

    if (ans % 11 == 0) {
      console.log("ISBN Number");
    } else {
      console.log("Not ISBN number");
    }
  }
}

// ISBNNum(n);

function automorphicNum(n) {
  let copy = n,
    count = 0;
  let sq = n * n;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  if (sq % Math.pow(10, count) == copy) {
    console.log("Automorphic Number");
  } else {
    console.log("Not Automorphic Number");
  }
}

automorphicNum(n);
