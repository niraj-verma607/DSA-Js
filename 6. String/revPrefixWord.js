// LeetCode 2000 — Reverse Prefix of Word

// ## Intuition

// We need to reverse the part of the string starting from index `0`
// up to the **first occurrence** of the given character `ch`.
//
// The idea is simple:
//
// - Find the first occurrence of `ch`.
// - Take the prefix from the beginning up to that position.
// - Reverse that prefix.
// - Keep the remaining part of the string unchanged.
// - If `ch` does not exist, return the original string.
//
// For example:
//
// word = "abcdefd"
// ch = "d"
//
// First `d` is at index `3`:
//
// `"abcd"` → `"dcba"`
//
// Keep the remaining `"efd"`:
//
// `"dcba" + "efd"` → `"dcbaefd"`
//
// **Think of it as:** **Find → Reverse Prefix → Keep Remaining**

// ---

// ## Approach

// ### Step 1: Find the First Occurrence
// - Traverse the string from left to right.
// - Stop when `word[i] === ch`.
// - The first matching index is where the prefix ends.

// ### Step 2: Check if `ch` Exists
// - If we reach the end without finding `ch`,
//   return the original `word`.

// ### Step 3: Reverse the Prefix
// - The prefix starts at index `0`.
// - Its ending index is the position where we found `ch`.
// - Reverse all characters from index `0` to that position.

// For example:
//
// `"abcdefd"`
//
// Prefix:
//
// `"abcd"`
//
// Reverse it:
//
// `"dcba"`

// ### Step 4: Keep the Remaining Part
// - Characters after the first `ch` do not change.
//
// `"abcdefd"`
//
// Prefix → `"abcd"`
// Remaining → `"efd"`
//
// Result:
//
// `"dcbaefd"`

// ### Step 5: Return the Result
// - Combine the reversed prefix with the unchanged remaining part.
// - Return the final string.

// ---

// ## Key Pattern

// **Find First Occurrence → Reverse Prefix → Keep Remaining**

// The important thing to understand is that we only reverse
// **up to the FIRST occurrence** of `ch`, not every occurrence.

function reversePrefix(word, ch) {
  let index = -1;

  // Find the first occurrence of ch
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }

  // ch not found
  if (index === -1) {
    return word;
  }

  // Reverse the prefix
  let answer = "";

  for (let i = index; i >= 0; i--) {
    answer += word[i];
  }

  // Add the remaining part
  for (let i = index + 1; i < word.length; i++) {
    answer += word[i];
  }

  return answer;
}

console.log(reversePrefix("abcdefd", "d"));

// word = "abcdefd"
// ch   = "d"

// Find first d
//       ↓
// index = 3
//       ↓
// Reverse from index 3 to 0
//       ↓
// d → c → b → a
//       ↓
// "dcba"
//       ↓
// Add remaining characters
//       ↓
// e → f → d
//       ↓
// "dcbaefd"
