function pattern10(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

pattern10(5);
