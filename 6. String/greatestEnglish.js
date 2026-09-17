// LeetCode 2309 — Greatest English Letter in Upper and Lower Case

// ## Intuition

// The question asks for the **largest alphabet letter** that exists in **both lowercase and uppercase**.

// Think of it in two steps:
// 1. Remember which letters exist in the string.
// 2. Check from **Z → A** and return the first letter whose uppercase and lowercase are both present.

// > Why Z → A? Because we need the **greatest** alphabetical letter.

// ---

// ## Approach

// ### Step 1: Store all characters
// - Traverse the string once.
// - Save every character in a set (or any structure for fast lookup).

// ### Step 2: Check from Z to A
// - Start with `'Z'`, then `'Y'`, ..., until `'A'`.
// - For each uppercase letter:
//   - Check if both uppercase and lowercase versions exist.
//   - Example: `D` and `d`.

// ### Step 3: Return the answer
// - If both exist, return the uppercase letter immediately.
// - If no letter satisfies the condition, return an empty string `""`.

function greatestLetter(s) {
  let set = new Set(s);
//   A Set is a collection of unique values.
// Think of it like a bag that stores each item only once.

// Loop from Z to A (These are ASCII values)
  for (let i = 90; i >= 65; i--) {
    let upper = String.fromCharCode(i);
    let lower = String.fromCharCode(i + 32);

    if (set.has(upper) && set.has(lower)) {
      return upper;
    }
  }

  return "";
}

// Example
console.log(greatestLetter("lEeTcOdE")); // E
