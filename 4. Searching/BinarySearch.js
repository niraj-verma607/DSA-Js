function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      index = mid;
      break;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (index == -1) {
    console.log("Not Found");
  } else {
    console.log("Found at index : " + index);
  }
}

binarySearch([10, 20, 30, 40, 50], 20);
 