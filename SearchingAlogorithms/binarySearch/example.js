function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (sortedArray[middle] === value) return middle;
    if (value > sortedArray[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 5, 6, 7, 8, 9, 10, 13, 15, 18];
console.log(binarySearch(arr, 9)); //6
console.log(binarySearch(arr, 8)); //5
console.log(binarySearch(arr, 2)); //-1 1,2,3,

// Time complexity: O(logn)

// SpaceComplexity: O(1)
