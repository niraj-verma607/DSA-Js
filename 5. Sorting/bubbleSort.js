function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the greatest elem
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  console.log(arr);
}

bubbleSort([9, 8, 1, 4, 10, 23]);
bubbleSort([9, 8, 0, 10, 23]);
bubbleSort([9, 8, 1, 4, 1]);

function bubbleSortDec(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap the greatest elem
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  console.log(arr);
}
bubbleSortDec([9, 8, 1, 4, 10, 23]);
bubbleSortDec([9, 8, 0, 10, 23]);
bubbleSortDec([9, 8, 1, 4, 1]);
