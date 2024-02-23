// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  let map = {};
  while (a > 0) {
    let r = a % 10;
    a = Math.floor(a / 10);
    map[r] = (map[r] || 0) + 1;
  }
  while (b > 0) {
    let r = b % 10;
    console.log(r);
    if (!map[r]) return false;
    b = Math.floor(b / 10);
    map[r] -= 1;
  }
  return true;
}

console.log(sameFrequency(182, 128));
