function pattern11(n) {
  for (let i = 0; i < n; i++) {
    // Space
    for (let j = 0; j < n - i + 1; j++) {
      process.stdout.write(" ");
    }
    // Star
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }
    // Space
    for (let j = 0; j < n - i + 1; j++) {
      process.stdout.write(" ");
    }
    console.log();
  }
}

//       *
//      ***
//     *****
//    *******
//   *********

pattern11(5);
