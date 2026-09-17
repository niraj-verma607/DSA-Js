// Accept a string and print the frequency of each character

function frequency(str) {
  let arr = new Array(128).fill(0);

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    arr[ascii] = arr[ascii] + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(String.fromCharCode(i) + "->" + arr[i]);
    }
  }
}

// frequency("naman");
// console.log("-----------");
// frequency("malayalam");

// If all charcter are in lowercase
function frequency2(str) {
  let arr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    arr[ascii - 97] = arr[ascii - 97] + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(String.fromCharCode(i + 97) + "->" + arr[i]);
    }
  }
}

frequency2("naman");
console.log("-----------");
frequency2("malayalam");
