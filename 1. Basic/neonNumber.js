function neonNumber(nStr) {
  let sq = Math.pow(nStr, 2);
  let sum = 0;

  while (sq > 0) {
    let digit = sq % 10;
    sum = sum + digit;
    sq = Math.floor(sq / 10);
  }

  if (nStr == sum) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(neonNumber(91));
