// Toggle each alphabet of string in AcgDfD to aCGdFd

function toggleString(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i); //charCodeAt to get ascii value and fromCharCode to character
    if (ascii >= 65 && ascii <= 90) {
      ans = ans + String.fromCharCode(ascii + 32);
      // The difference between uppercase chaacter and lowercase character is 32 so if any character has 65 (A) ascii value and we add 32 on it, it will become 97(a) the is lower version same as we substract if from lowercase it will change into uppercase
    } else {
      ans = ans + String.fromCharCode(ascii - 32);
    }
  }
  console.log(ans);
}

toggleString("AtrEjf");
toggleString("aterAgrt");
