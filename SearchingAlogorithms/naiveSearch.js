//Write a function to calculate number of occurences of a short string inside long string.

function naiveSearch(longString, shortString) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (shortString[j] !== longString[i + j]) break;
      if (j === shortString.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("I love coding with javascript", "coding")); // 1
console.log(naiveSearch("I love coding with javascript", "coding1")); // 0
