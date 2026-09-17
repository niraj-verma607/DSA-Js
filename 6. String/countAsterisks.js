// LeetCode 2315 — Count Asterisks.


// ### Intuition
// Think of `|` as a switch:
// - First `|` → enter **ignore mode**
// - Second `|` → exit **ignore mode**

// Count `*` only when you are **outside** the `|...|` pair.

// ### How to Approach
// 1. Create `count = 0`.
// 2. Create a boolean `inside = false`.
// 3. Traverse the string from left to right.
// 4. If the character is `|`, toggle `inside`.
// 5. If the character is `*` and `inside` is `false`, increase `count`.
// 6. Return `count`.

function countAsterisks(str) {
  let count = 0;
  let inside = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "|") {
      inside = !inside;
    } else if (str[i] === "*" && inside == false) {
      count++;
    }
  }

  console.log(count);
}

countAsterisks("yo|uan|e**|ble***au|tiful*");
