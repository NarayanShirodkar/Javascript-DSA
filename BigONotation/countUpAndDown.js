function countUpAndDown(n) {
  console.log("Going top!!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Reached top going down!!");
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
  console.log("Reached bottom!!");
}

console.log(countUpAndDown(10));

//Time Complexity O(2n) => O(n)
