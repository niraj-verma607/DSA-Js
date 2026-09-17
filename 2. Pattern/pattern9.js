function pattern9(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(i + " ");
    }
    console.log();
  }
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

pattern9(5);
