// LeetCode 2299 — Strong Password Checker II

// ## Intuition

// Think of this problem as a **checklist**.

// While scanning the password only **once**, keep checking whether each requirement is satisfied.

// Requirements:
// - At least 8 characters
// - At least one lowercase letter
// - At least one uppercase letter
// - At least one digit
// - At least one special character
// - No two adjacent characters are the same

// ---

// ## Approach

// ### Step 1: Check Length
// - If the password length is less than 8, return `false`.

// ### Step 2: Create Flags
// Maintain four boolean variables:
// - `hasLower`
// - `hasUpper`
// - `hasDigit`
// - `hasSpecial`

// All start as `false`.

// ### Step 3: Traverse the String
// Go through each character from left to right.

// For every character:
// - If it is lowercase → mark `hasLower`
// - If it is uppercase → mark `hasUpper`
// - If it is a digit → mark `hasDigit`
// - If it is a special character → mark `hasSpecial`

// ### Step 4: Check Adjacent Characters
// - Compare the current character with the previous one.
// - If both are the same, return `false` immediately.

// ### Step 5: Final Check
// - After the loop, return `true` only if all four flags are `true`.

function strongPassword(password) {
  if (password.length < 8) return false;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasSpecial = false;

  let special = "!@#$%^&*()-+";

  for (let i = 0; i < password.length; i++) {
    let ch = password[i];
    if (i > 0 && ch === password[i - 1]) {
      return false;
    }

    if (ch >= "a" && ch <= "z") {
      hasLower = true;
    } else if (ch >= "A" && ch <= "Z") {
      hasUpper = true;
    } else if (ch >= "0" && ch <= "9") {
      hasDigit = true;
    } else if (special.includes(ch)) {
      hasSpecial = true;
    }
  }

  return hasLower && hasUpper && hasDigit && hasSpecial;
}

console.log(strongPassword("Ilove@123"));
