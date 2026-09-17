// Capitalize first & last character of each word in the sentence and print thw new sentence

// Ex - Hello bhai kaise ho a
// HellO BhaI KaisE HO A

function capitalizeWord(sent) {
  let arr = sent.split(" ");
  let ans = "";

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length - 1);
    let last = word.charAt(word.length - 1).toUpperCase();

    ans = ans + (first + mid + last) + " ";
  }

  console.log(ans);
}

capitalizeWord("Hello bhai kaise ho");
