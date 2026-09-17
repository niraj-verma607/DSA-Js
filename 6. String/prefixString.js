// Take an array of strings words and a string prefix.Print the number of strings in words that comntain pref as a prefix.

// Example - Input : Words =  ["pay","attention", "practice", "attend"], pref = "at"
// Output : 2

function prefixString(words, pref) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count++;
    }
  }

  console.log(count);
}

let words = ["pay", "attention", "practice", "attend", "attendence"];
let pref = "at";

prefixString(words, pref);
