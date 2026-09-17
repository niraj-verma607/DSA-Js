function pattern2(n) {
  // For row
  for (let i = 1; i <= n; i++) {
    // for column
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// * 
// * *
// * * *
// * * * *
// * * * * *

pattern2(5);
