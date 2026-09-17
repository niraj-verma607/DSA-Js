// Check two strings are anagram or not anagrams words have the same
// anagrams => word length & same character count
// Ex => car and arc are anagram

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freq = new Array(128).fill(0);

  // Count characters of first string
  for (let i = 0; i < str1.length; i++) {
    let ascii = str1.charCodeAt(i);
    freq[ascii]++;
  }

  // Remove characters using second string
  for (let i = 0; i < str2.length; i++) {
    let ascii = str2.charCodeAt(i);
    freq[ascii]--;

    if (freq[ascii] < 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
