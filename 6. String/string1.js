// Ques :  Accept astring from a user and prints its each character on a new line

function newline(string) {
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    console.log(string.charAt(i));
  }
}

newline("Niraj");
newline("Developer");
