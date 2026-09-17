function pattern8(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n; j++) {
      if (j === i || j === 2 * n - i) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    console.log();
  }
}

pattern8(5);
