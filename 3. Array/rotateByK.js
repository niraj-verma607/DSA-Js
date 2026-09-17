// Left rotation by k times

function rotateByK(arr) {
  let k = 3;

  k = k % arr.length;

  for (let j = 1; j <= k; j++) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = temp;
  }

  console.log(arr);
}

rotateByK([10, 20, 30, 40, 50]);

// Right rotation by k times

function rotateElemByK(arr) {
  let k = 3;
  k = k % arr.length;
  for (let j = 1; j <= k; j++) {
    let temp = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      arr[i + 1] = arr[i];
    }

    arr[0] = temp;
  }

  console.log(arr);
}

rotateElemByK([1, 2, 3, 4, 5, 6, 7]);
