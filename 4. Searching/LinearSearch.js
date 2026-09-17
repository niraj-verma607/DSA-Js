function searchElem(target) {
  let arr = [1, 5, 10, 12, 65, 150, 20, 30];
  let index = -1;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == target) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    console.log("Not Found");
  } else {
    console.log(`Found at ${index} index`);
  }
}
searchElem(12);

searchElem(120);
 