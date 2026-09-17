function pattern4(char) {
  let end = char.charCodeAt(0);

  for (let i = "A".charCodeAt(0); i <= end; i++) {
    for (let j = "A".charCodeAt(0); j <= i; j++) {
      process.stdout.write(String.fromCharCode(j) + " ");
    }
    console.log();
  }
}

// A
// A B
// A B C
// A B C D
// A B C D E

pattern4("E");
