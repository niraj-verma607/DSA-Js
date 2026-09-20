// LeetCode 2042 — Check if Numbers Are Ascending in a Sentence

// ## Intuition

// We need to check whether all the numbers in the sentence
// are in **strictly increasing order**.
//
// The idea is simple:
//
// - Move through the sentence from left to right.
// - Find the numbers in the sentence.
// - Keep track of the previous number.
// - Whenever we find a new number, compare it with the previous number.
// - If the new number is not greater, return `false`.
// - If every number is greater than the previous one, return `true`.
//
// For example:
//
// `"hello 1 box 3 is 5"`
//
// Numbers are:
//
// `1 → 3 → 5`
//
// They are strictly increasing.
//
// **Think of it as:** **Find Number → Compare → Update**

// ---

// ## Approach

// ### Step 1: Traverse the Sentence
// - Move through the sentence character by character.
// - Numbers can contain more than one digit, so we need to collect
//   all consecutive digits together.

// ### Step 2: Detect a Number
// - If the current character is a digit, start building the number.
// - Keep moving forward while the characters are digits.
//
// For example:
//
// `"abc 123 xyz"`
//
// When we reach `1`, collect:
//
// `1 → 12 → 123`

// ### Step 3: Compare With Previous Number
// - Convert the collected number into a number.
// - Compare it with the previous number.
//
// For example:
//
// `previous = 10`
// `current = 15`
//
// Since:
//
// `15 > 10`
//
// the order is valid.

// ### Step 4: Update Previous Number
// - After a valid comparison, make the current number
//   the new `previous` number.

// ### Step 5: Handle the First Number
// - The first number has nothing before it to compare with.
// - Store it as `previous` and continue.

// ### Step 6: Return Result
// - If we ever find:
//
// `current <= previous`
//
// return `false`.
//
// - If all numbers are strictly increasing, return `true`.

// ---

// ## Key Pattern

// **Find Number → Compare With Previous → Update Previous**

// The important thing to understand is that we only compare
// **numbers**, not words.
//
// Example:
//
// `"hello 1 box 3 is 5"`
//
// Ignore words:
//
// `1 → 3 → 5`
//
// Then check:
//
// `1 < 3 < 5` ✅

function areNumbersAscending(s) {
  let previous = -1;

  for (let i = 0; i < s.length; i++) {
    // Check if current character is a digit
    if (s[i] >= "0" && s[i] <= "9") {
      let current = 0;

      // Build the complete number
      while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        current = current * 10 + Number(s[i]);
        i++;
      }

      // Check strictly increasing
      if (current <= previous) {
        return false;
      }

      // Update previous number
      previous = current;
    }
  }

  return true;
}

console.log(areNumbersAscending("hello 1 box 12 is 25"));

// Scan sentence
//      ↓
// Find digit
//      ↓
// Build complete number
//      ↓
// Compare with previous
//      ↓
// Update previous
//      ↓
// Find next number
