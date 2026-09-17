// All zeros to left and all ones to right

function onesZeros(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }
  console.log(arr);
}

onesZeros([1, 1, 0, 1, 0, 1, 0, 0]);
