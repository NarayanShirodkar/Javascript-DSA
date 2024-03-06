// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  let res = capitalizeFirst(arr.slice(0, -1));
  let str =
    arr[arr.length - 1][0].toUpperCase() + arr[arr.length - 1].substr(1);
  res.push(str);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
