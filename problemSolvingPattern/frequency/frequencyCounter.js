function counter(array1, array2) {
  if (array1.length !== array2.length) return false;
  let map1 = {},
    map2 = {};
  for (key of array1) {
    map1[key] = (map1[key] || 0) + 1;
  }
  for (key of array2) {
    map2[key] = (map2[key] || 0) + 1;
  }
  for (let key in map1) {
    if (!(key ** 2 in map2)) return false;
    if (map1[key] !== map2[key ** 2]) return false;
  }
  return true;
}

console.log(counter([1, 2, 3, 2], [9, 4, 5, 1]));
