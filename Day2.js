// 1. Count Digit

function digitCount(n) {
  let num = n.toString();
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    count++;
  }
  console.log(count);
}

// digitCount(12345);

// 2. Reverse a Number

function reverseNum(num) {
  let reverse = 0;
  let digit = null;
  while (num > 0) {
    digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }

  console.log(reverse);
}

// reverseNum(78975);

// 3. Sum of digits

function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  console.log(sum);
}

// sumOfDigit(12345)

// 4. Product of Digits

function productOfDigit(num) {
  let product = 1;

  while (num > 0) {
    let digit = num % 10;
    product = product * digit;
    num = Math.floor(num / 10);
  }
  console.log(product);
}

// productOfDigit(1234)

// 5. Largest Digit

function largestNum(num) {
  let largest = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit > largest) {
      largest = digit;
    }

    num = Math.floor(num / 10);
  }
  console.log(largest);
}

// largestNum(529387);

// 6. Smallest Digit

function smallestDigit(num) {
  let smallest = 9;
  while (num > 0) {
    let digit = num % 10;

    if (digit < smallest) {
      smallest = digit;
    }

    num = Math.floor(num / 10);
  }

  console.log(smallest);
}

// smallestDigit(152827);

// 7. Count Even Digits

function evenCount(num) {
  let evenCount = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit % 2 == 0) {
      evenCount++;
    }
    num = Math.floor(num / 10);
  }
  console.log(evenCount);
}

// evenCount(759354)

// 8. Palindrome Number

function palindromeNum(num) {
  let originalNum = num;
  let palindromeNum = 0;

  while (num > 0) {
    let digit = num % 10;

    palindromeNum = palindromeNum * 10 + digit;

    num = Math.floor(num / 10);
  }

  if (originalNum === palindromeNum) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// palindromeNum(1221)

// 9. Armstrong Number

function armstrongNum(num) {
  let originalNum = num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;

    let digitCube = Math.pow(digit, 3);

    sum = sum + digitCube;

    num = Math.floor(num / 10);
  }
  if (originalNum == sum) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// armstrongNum(153);

// 10. Factorial

function factorial(num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

// factorial(6)

// 11. Sum of Even Numbers

function sumOfEven(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

// sumOfEven(10)

// 12. Prime Number

function primeNumber(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log("Prime Number");
  } else {
    console.log("Not Prime");
  }
}

// primeNumber(11)

// 13. Count Factors

function countFactor(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  console.log(count);
}

// countFactor(6)

// 14. Sum of Factors

function sumOfFactors(num) {
  let sum = 0;

  let i = 1;

  while (i <= num) {
    if (num % i == 0) {
      sum = sum + i;
    }
    i++;
  }
  console.log(sum);
}
// sumOfFactors(6)

// 15.Perfect Number
// A perfect number is a number where the sum of its proper factors equals the number itself.

function perfectNum(num) {
  let sum = 0;

  let i = 1;
  while (i < num) {
    if (num % i == 0) {
      sum = sum + i;
    }
    i++;
  }
  if (num == sum) {
    console.log("Perfect Number");
  } else {
    console.log("Not Perfect Number");
  }
}
// perfectNum(6);

// 16.Digital Root

function digitalRoot(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  while (sum > 9) {
    let newSum = 0;

    while (sum > 0) {
      let digit = sum % 10;
      newSum = newSum + digit;
      sum = Math.floor(sum / 10);
    }
    sum = newSum;
  }

  console.log(sum);
}

// digitalRoot(9875);

// 17. Multiplication Table

function multiplication(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

// multiplication(5);

// 18. Count Odd Digits

function countOddDigit(num) {
  let count = 0;

  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 !== 0) {
      count++;
    }
    num = Math.floor(num / 10);
  }
  console.log(count);
}
// countOddDigit(123456)

// 19. Alternate Sum

function alternateSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum - i;
    } else {
      sum = sum + i;
    }
  }
  console.log(sum);
}
// alternateSum(5)

// 20. Pattern sum

function patternSum(num) {
  let term = 0;
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    term = term * 10 + i;
    sum += term;
    // console.log(term)
  }

  console.log(sum);
}

patternSum(4);
