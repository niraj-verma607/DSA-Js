// Reverse an array

// With extra space
function revArr(arr) {
  let temp = new Array(arr.length);
  let i = arr.length - 1;

  for (let j = 0; j < temp.length; j++) {
    temp[j] = arr[i];
    i--;
  }
  console.log(temp);
}

revArr([10, 50, 98, 45, 89]);

// Without Extra space (Two pointer)
function revArr2(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  console.log(arr);
}

revArr2([10, 50, 98, 45, 89]);
