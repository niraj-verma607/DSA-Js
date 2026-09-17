// Ques : Palindrome string using two pointer algorithm (hint : array reverse algo)

function palindromeString1(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }

  if (str === rev) console.log(true);
  else console.log(false);
}

// palindromeString1("naman");

function palindromeString2(str) {
  let i = 0;
  let j = str.length - 1;
  let isPallindrome = true;
  while (i < j) {
    if (str.charAt(i) != str.charAt(j)) {
      isPallindrome = false;
      break;
    }
    i++;
    j--;
  }

  console.log(isPallindrome ? "Pallindrome" : "Not Pallindrome");
}

palindromeString2("naman");
palindromeString2("niraj");
