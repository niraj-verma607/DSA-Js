// LeetCode 2264 — Largest 3-Same-Digit Number in String

// ## Intuition

// We need to find a **3-digit substring** where all three digits are the same.
//
// The idea is simple:
//
// - Move through the string from left to right.
// - At every position, look at **3 consecutive digits**.
// - Check if all 3 digits are equal.
// - If they are equal, we found a valid number.
// - Keep the **largest valid number** we have seen.
//
// **Think of it as:** **Scan → Check → Keep Largest**

// ---

// ## Approach

// ### Step 1: Create an Answer
// - Start with an empty string `""`.
// - This will store the largest valid 3-digit number found so far.

// ### Step 2: Traverse the String
// - Use a loop to move from left to right.
// - At each index `i`, consider `i`, `i + 1`, and `i + 2`.
// - We stop at `num.length - 3` because we need at least 3 characters.

// ### Step 3: Check Three Consecutive Digits
// - Compare the current digit with the next two digits.
// - If:
//
// `num[i] === num[i + 1] && num[i] === num[i + 2]`
//
// - then all three digits are the same.

// ### Step 4: Create the Current Number
// - If the three digits are equal, take those 3 characters.
// - For example:
//
// `"2300055519"`
//
// - When we reach `"000"`, it becomes our current valid number.

// ### Step 5: Compare With Answer
// - Compare the current valid number with our previous answer.
// - If the current number is larger, update `answer`.
// - For example:
//
// `"333"` → answer = `"333"`
//
// `"777"` → answer = `"777"`
//
// `"555"` → keep `"777"`
//
// ### Step 6: Return Result
// - After checking the entire string, return `answer`.
// - If no three equal consecutive digits were found, `answer` remains `""`.

function largestGoodNumber(num) {
  let answer = "";

  for (let i = 0; i <= num.length - 3; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      let current = num.substring(i, i + 3);

      if (current > answer) {
        answer = current;
      }
    }
  }

  return answer;
}

console.log(largestGoodNumber("2300055519"));
