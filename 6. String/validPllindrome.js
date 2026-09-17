// Leetcode 125.. VallidPallindrome

function isPalindrome(s) {
  //   s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); //Regex to replace spaces alphanumeric characters

  // Create cleaned string
  for (let ch of s.toLowerCase()) {
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      str += ch;
    }
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
