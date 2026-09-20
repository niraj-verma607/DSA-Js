// LeetCode 1945 — Sum of Digits of String After Convert

// ## Intuition

// We are given a string of lowercase letters and an integer `k`.
//
// First, we convert every letter into its alphabet position:
//
// `a = 1, b = 2, c = 3, ..., z = 26`
//
// Then we repeatedly calculate the **sum of the digits**.
//
// We need to repeat this process `k` times.
//
// For example:
//
// `"abc"`
//
// Convert:
//
// `a = 1, b = 2, c = 3`
//
// So:
//
// `"abc"` → `"123"`
//
// First transformation:
//
// `1 + 2 + 3 = 6`
//
// If `k = 1`, the answer is `6`.
//
// **Think of it as:** **Convert → Sum Digits → Repeat**

// ---

// ## Approach

// ### Step 1: Convert Characters to Numbers
// - Traverse the string character by character.
// - Convert each letter into its alphabet position.
//
// For example:
//
// `"abc"`
//
// `a → 1`
// `b → 2`
// `c → 3`
//
// So the converted string becomes:
//
// `"123"`

// ### Step 2: Calculate Digit Sum
// - Now calculate the sum of all digits in the converted string.
//
// For:
//
// `"123"`
//
// `1 + 2 + 3 = 6`

// ### Step 3: Repeat the Process
// - We need to perform the digit-sum operation `k` times.
// - After the first transformation, use the result for the next transformation.
//
// For example:
//
// `"leetcode"` → converted number
//
// Then:
//
// `digit sum → new number`
//
// Then again:
//
// `digit sum → new number`

// ### Step 4: Stop After `k` Transformations
// - Keep repeating until we have performed exactly `k` transformations.
// - The final number is our answer.

// ### Step 5: Return the Result
// - Return the final digit sum as a number.

// ---

// ## Key Pattern

// **Convert → Transform → Repeat `k` Times → Return**

// The important thing to understand is that there are **two different
// operations**:
//
// 1. Convert letters into their alphabet positions.
// 2. Keep adding the digits of the resulting number.
//
// We only do the letter conversion once.
// After that, we repeatedly calculate the digit sum.

function getLucky(s, k) {
  let number = "";

  // Step 1: Convert each character to its alphabet position
  for (let i = 0; i < s.length; i++) {
    let value = s.charCodeAt(i) - 96;

    number += value;
  }

  // Step 2: Repeat digit sum k times
  for (let round = 0; round < k; round++) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
      sum += Number(number[i]);
    }

    number = String(sum);
  }

  return Number(number);
}

console.log(getLucky("abc", 2));
