function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let key = arr[i]
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

insertionSort([9, 8, 1, 4, 10]);
insertionSort([42, 7, 19, 3, 55, 12, 28, 1, 39, 16]);
insertionSort([1, 3, 7, 12, 1, 42, 55]);
