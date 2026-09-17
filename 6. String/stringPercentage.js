// LeetCode 2278 – Percentage of Letter in String

// ### Intuition
// The question asks:
// > What percentage of the string is made up of the given letter?

// You only need:
// - Total length of the string
// - Number of times the letter appears

// ### How to Approach
// 1. Store the string length.
// 2. Create `count = 0`.
// 3. Traverse every character.
// 4. If it matches the given letter, increment `count`.
// 5. Calculate:

// ```text
// (count / length) × 100
// ```

// 6. Round the answer down to the nearest integer.

function percentageString(s, letter) {
  let count = 0;
  let sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    if (s[i] === letter) {
      count++;
    }
  }

  let percentage = Math.floor((count / sLength) * 100);

  console.log(percentage);
}

percentageString("hello", "l");
