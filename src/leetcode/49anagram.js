/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = {}
  strs.forEach((str) => {
    let sorted = str.split("").sort().join("")
    if (result[sorted]) {
      result[sorted] = [...result[sorted], str]
    } else {
      result[sorted] = [str]
    }
  })

  return Object.values(result)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

// another solution without sort
