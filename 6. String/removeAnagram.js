// LeetCode 2273 — Find Resultant Array After Removing Anagrams

// ## Intuition

// We are given an array of words.
//
// We need to remove a word if it is an **anagram of the previous word**.
//
// The important thing is that we only need to compare
// the current word with the **last word we kept**.
//
// For example:
//
// ["abba", "baba", "cd", "cd"]
//
// "abba" and "baba" are anagrams,
// so remove "baba".
//
// Then compare "cd" with the last kept word "abba".
// They are not anagrams, so keep "cd".
//
// Then "cd" is an anagram of the last kept "cd",
// so remove it.
//
// Result:
//
// ["abba", "cd"]
//
// **Think of it as:** **Compare → Remove/Keep → Continue**

// ---

// ## Approach

// ### Step 1: Create a Result Array
// - Create an empty array `result`.
// - The result array will contain the words that we decide to keep.

// ### Step 2: Add the First Word
// - The first word has nothing before it to compare with,
//   so we always keep it.

// ### Step 3: Compare With the Previous Kept Word
// - Traverse the remaining words one by one.
// - Compare the current word with the **last word in result**.
// - We need to check whether they are anagrams.

// ### Step 4: Check Anagrams
// - Two words are anagrams if they contain the same characters
//   with the same frequencies.
//
// For example:
//
// `"abba"` → a appears 2 times, b appears 2 times
//
// `"baba"` → a appears 2 times, b appears 2 times
//
// Therefore, they are anagrams.

// ### Step 5: Remove or Keep
// - If the current word is an anagram of the last word in `result`,
//   do not add it.
// - Otherwise, add it to `result`.

// ### Step 6: Return Result
// - After checking all words, return `result`.

// ---

// ## Key Pattern

// **Compare With Previous → Check Anagram → Remove/Keep**

// The important thing to understand is that we compare the current word
// with the **last word that we kept**, not necessarily the previous
// word in the original array.

function removeAnagrams(words) {
  let result = [];

  // Always keep the first word
  result.push(words[0]);

  for (let i = 1; i < words.length; i++) {
    let previous = result[result.length - 1];
    let current = words[i];

    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    // Count characters of previous word
    for (let j = 0; j < previous.length; j++) {
      let index = previous.charCodeAt(j) - 97;
      count1[index]++;
    }

    // Count characters of current word
    for (let j = 0; j < current.length; j++) {
      let index = current.charCodeAt(j) - 97;
      count2[index]++;
    }

    // Check if both words are anagrams
    let isAnagram = true;

    for (let j = 0; j < 26; j++) {
      if (count1[j] !== count2[j]) {
        isAnagram = false;
        break;
      }
    }

    // If not anagram, keep the word
    if (!isAnagram) {
      result.push(current);
    }
  }

  return result;
}

console.log(removeAnagrams(["abba", "baba", "cd", "cd"]));



// words
//   ↓
// Create result
//   ↓
// Keep first word
//   ↓
// Take current word
//   ↓
// Get last word from result
//   ↓
// Count characters of both
//   ↓
// Compare counts
//   ↓
//      ┌───────────────┐
//      ↓               ↓
//   Anagram        Not Anagram
//      ↓               ↓
//    Skip          Add to result
//      ↓               ↓
//      └───────┬───────┘
//              ↓
//        Next word
//              ↓
//        Return result