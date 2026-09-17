// Move all the negative elements on the right side

function moveNegative(arr) {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (arr[i] < 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
  }
  console.log(arr);
}

moveNegative([-5, 8, -6, -8, 6, 5]);
