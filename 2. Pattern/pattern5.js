// Inverted Right Angle Triangle

function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    // for (let j = 1; j <= n - i + 1; j++) { total rows - rowNum + 1
    for (let j = n; j >= i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// * * * * *
// * * * *
// * * *
// * *
// *

pattern5(5);
