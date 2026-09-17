// Print the count of subarrays whose sum is equal to the target
function subArray(arr) {
  let target = 12;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum == target) {
        count++;
      }
    }
  }

  console.log(count);
}

subArray([1, 2, 3, 7, 5]);
