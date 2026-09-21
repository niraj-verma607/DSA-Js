// LeetCode 1768 — Merge Strings Alternately

function mergeAlternately(word1, word2) {
  let answer = "";
  let i = 0;

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) {
      answer += word1[i];
    }

    if (i < word2.length) {
      answer += word2[i];
    }

    i++;
  }

  return answer;
}
