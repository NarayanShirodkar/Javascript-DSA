function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // add whatever parameters you deem necessary - good luck!
  let lookup = {},
    map2 = {};
  for (let char in str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  for (let char in str2) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  return true;
}

console.log(validAnagram("anagram", "aagman"));
