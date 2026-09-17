// Rotate element of array to left by 1 (Array left rotation by 1)

function rotateElem(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = temp;

  console.log(arr);
}

rotateElem([10, 20, 30, 40, 50]);

// Rotate element of array to right by 1 (Array right rotation by 1)

function rightRotation(arr) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = temp;

  console.log(arr);
}

rightRotation([10, 20, 30, 40, 50]);
