function primeFactors(nStr) {
  let i = 2;
  if (nStr == 0 || nStr == 1) {
    return "No prime factors";
  }
  while (nStr > 1) {
    if (nStr % i == 0) {
      console.log(i);
      nStr = nStr / i;
    } else {
      i++;
    }
  }
}

primeFactors(45);
