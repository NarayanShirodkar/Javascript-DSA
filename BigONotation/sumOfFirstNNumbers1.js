// define a function to calculate sum of first n numbers.

function sumOfFirstNNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfFirstNNumbers(4));

//Time Complexity O(n)
//Space Complexity O(1)
