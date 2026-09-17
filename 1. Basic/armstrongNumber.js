function armstrongNum(nStr) {
  let original = nStr;
  let digits = nStr.toString().length;
  let sum = 0;

  while (nStr > 0) {
    let digit = nStr % 10;
    sum += Math.pow(digit, digits);
    nStr = Math.floor(nStr / 10);
  }

  if (sum == original) {
    return "Armstrong";
  } else {
    return "Not Armstrong";
  }
}




console.log(armstrongNum(370));
