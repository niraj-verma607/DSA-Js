// LeetCode 2124 – Check if All A's Appear Before All B's.

// ### Intuition
// Only one situation is invalid:
// > An `a` appears after you've already seen a `b`.

// Remember only whether you've seen a `b`.

// ### How to Approach
// 1. Create `seenB = false`.
// 2. Traverse the string from left to right.
// 3. If the character is `b`, set `seenB = true`.
// 4. If the character is `a` and `seenB` is already `true`, return `false`.
// 5. If the loop finishes, return `true`.

// ---

// ## Pattern You Learned

// All three are **one-pass string traversal** problems.

// - Scan left → right once.
// - Maintain a small variable (`count`, `inside`, or `seenB`).
// - Update it based on the current character.
// - Return the final answer.

function checkString(s) {
  let seenB = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") {
      seenB = true;
    } else if (s[i] === "a" && seenB == true) {
      return false;
    }
  }
  return true;
}
