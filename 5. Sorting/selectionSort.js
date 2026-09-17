function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  console.log(arr);
}

selectionSort([9, 8, 1, 4, 10]);
selectionSort([42, 7, 19, 3, 55, 12, 28, 1, 39, 16]);
selectionSort([1, 3, 7, 12, 1, 42, 55]);
