// Second Max element from array

function secMax(arr) {
  let max = Math.max(arr[0], arr[1]);
  let sMax = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax && arr[i] != max) {
      sMax = arr[i];
    }
  }

  console.log(sMax);
}

function secMin(arr) {
  let min = Math.min(arr[0], arr[1]);
  let sMin = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < min) {
      sMin = min;
      min = arr[i];
    } else if (arr[i] < sMin && arr[i] != min) {
      sMin = arr[i];
    }
  }

  console.log(sMin);
}

secMin(`[10, 5, 3, 50, 98, 45, 89]`);
