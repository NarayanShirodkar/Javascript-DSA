// Linear search is an searching algorithms in which we search for the given element in array
//  linearly comparing each item in the array with target item one by one.

//Built in functions using linear search:

// indexOf
// includes
// findIndex
// find

// Example: Write a function to check if a element is present in the array.
//  If present return index of the element elese return -1.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const arr = [1, 3, 6, 2, 10, 15, 7, 8];
console.log(linearSearch(arr, 10)); // 4
console.log(linearSearch(arr, 11)); // -1

//Time complexity: O(n)
