// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  let ans = {};
  for (let key in obj) {
    let value;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      value = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      value = obj[key].toString();
    } else {
      value = obj[key];
    }
    ans[key] = value;
  }
  return ans;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
