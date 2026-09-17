let prompt = require("prompt-sync")();

let computer = Math.floor(Math.random() * 100 + 1);

let user, attempt = 0;

do {
  attempt++;
  user = Number(prompt("Enter a number between 1 and 100 : "));
  if (user > computer) {
    console.log("Too large");
  } else if (user < computer) {
    console.log("Too small");
  } else {
    console.log(
      "Congratulations, you guessed number correctly in " + attempt + " attempt",
    );
  }
} while (user != computer);
