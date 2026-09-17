// Ques : Accept a string and print it in reverse order

function revString(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }

  console.log(rev);
}

revString("Niraj");
revString("Verma");
