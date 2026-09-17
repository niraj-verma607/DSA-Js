// LeetCode 2399 — Check Distances Between Same Letters

// ## Intuition

// Every letter appears **exactly twice**.

// The idea is simple:

// - When you see a letter for the **first time**, remember its position.
// - When you see the **same letter again**, calculate how many letters are between the two occurrences.
// - Compare this value with the expected distance in the `distance` array.
// - If any letter doesn't match, return `false`.

// **Think of it as:** **Remember → Compare**

// ---

// ## Approach

// ### Step 1: Store First Occurrence
// - Create an array of size **26**.
// - Initialize every value with `-1` to indicate the letter hasn't appeared yet.

// ### Step 2: Traverse the String
// - Visit each character from left to right.
// - Convert the letter into its alphabet index (`a = 0`, `b = 1`, ..., `z = 25`).

// ### Step 3: Check First or Second Appearance
// - If the letter is seen for the first time, store its current index.
// - Otherwise, calculate the actual distance:

// `currentIndex - firstIndex - 1`

// ### Step 4: Compare Distance
// - Compare the calculated distance with `distance[letterIndex]`.
// - If they are different, return `false`.

// ### Step 5: Return Result
// - If every letter satisfies the condition, return `true`.

function checkDistances(s, distance) {
  let firstIndex = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 97;

    if (firstIndex[index] === -1) {
      firstIndex[index] = i;
    } else {
      let actualDistance = i - firstIndex[index] - 1;

      if (actualDistance !== distance[index]) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  checkDistances(
    "abaccb",

    [
      1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
  ),
);

console.log(
  checkDistances(
    "abaccb",
    [
      1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ],
  ),
);
