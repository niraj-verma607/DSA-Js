// Mirrored Inverted Right Angled Triangle

function pattern6(n) {
  for (let i = 1; i <= n; i++) {
    // Inverted
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("  "); //double space (one space for simple tringle)
    }
    // Right angled triangle
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

pattern6(5);

