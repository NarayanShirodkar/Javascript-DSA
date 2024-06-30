// get last i-th digit in the number
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// get count of numbers in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// get maximum number of numbers a number has in numbers.
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i += 1) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i of nums) {
      let digit = getDigit(i, k);
      digitBuckets[digit].push(i);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([233, 35, 5, 23, 21, 1, 68, 56348, 89, 122]));
