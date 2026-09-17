// Maximum number of words found in sentence

function mostWordsFound(sentences) {
  let maxWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    let count = 1; // first word

    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        count++;
      }
    }

    if (count > maxWords) {
      maxWords = count;
    }
  }

  console.log(maxWords);
}
// mostWordsFound([
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks",
// ]);

function mostWordsFound2(sentences) {
  let maxWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" "); // convert sentence into array
    let count = words.length;

    if (count > maxWords) {
      maxWords = count;
    }
  }

  console.log(maxWords);
}

// Test
let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks",
];

mostWordsFound2(sentences);
