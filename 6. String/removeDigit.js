// LeetCode 2259 — Remove Digit From Number to Maximize Result

// ## Intuition

// We need to remove **exactly one occurrence** of the given digit
// so that the resulting number is as large as possible.
//
// The idea is simple:
//
// - Find every occurrence of the given digit.
// - Try removing each occurrence one by one.
// - Compare the resulting numbers.
// - Keep the **largest result**.
//
// **Think of it as:** **Try All → Compare → Keep Maximum**

// ---

// ## Approach

// ### Step 1: Create an Answer
// - Start with an empty string `""`.
// - This will store the largest result we can get.

// ### Step 2: Traverse the String
// - Move through the number from left to right.
// - At every index `i`, check if `number[i]` is equal to the given `digit`.

// ### Step 3: Find the Matching Digit
// - If the current character is not the given digit, skip it.
// - If it matches, we have a possible digit to remove.

// ### Step 4: Remove the Current Digit
// - Create a new string by removing the digit at index `i`.
// - For example:
//
// `"1231"`
// digit = `"1"`
//
// - Remove the first `1`:
//
// `"231"`
//
// - Remove the second `1`:
//
// `"123"`
//
// ### Step 5: Compare With Answer
// - Compare the new result with our current `answer`.
// - If the new result is larger, update `answer`.
//
// For example:
//
// `"231"` → answer = `"231"`
//
// `"123"` → keep `"231"`
//
// ### Step 6: Return Result
// - After checking all occurrences of the digit, return `answer`.
// - Since the problem guarantees that `digit` exists in `number`,
//   we will always have a valid answer.

// ---

// ## Key Pattern

// **Scan → Try Every Removal → Compare → Keep Maximum**

// The important thing to understand is that when the digit appears
// multiple times, every occurrence is a possible choice to remove.

function removeDigit(number, digit) {
  let answer = "";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let current = "";

      for (let j = 0; j < number.length; j++) {
        if (j !== i) {
          current += number[j];
        }
      }

      if (current > answer) {
        answer = current;
      }
    }
  }

  return answer;
}

console.log(removeDigit("1231", "1"));


// number = "1231"
// digit  = "1"

//         First Loop
//             ↓
//      Find every "1"
//             ↓
//       ┌───────┴───────┐
//       ↓               ↓
//    i = 0           i = 3
//       ↓               ↓
//   remove 1        remove 1
//       ↓               ↓
//    "231"           "123"
//       ↓               ↓
//       └───────┬───────┘
//               ↓
//         Compare both
//               ↓
//            "231"
//               ↓
//            answer