// Similar to bubble sort, but instead of first placing large values into sorted
// position, it places small values into sorted position.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let k = arr[i];
      arr[i] = arr[min];
      arr[min] = k;
    }
  }

  return arr;
}

console.log(selectionSort([2, 5, 3, 6, 1, 8, 4]));

// Time Complexity => O(n^2)
