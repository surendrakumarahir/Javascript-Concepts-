/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let k = p.length
  let hash = {}
  // convert into hash
  for (let i = 0; i < p.length; i++) {
    if (hash[p[i]]) {
      hash[p[i]]++
    } else {
      hash[p[i]] = 1
    }
  }
  let count = Object.keys(hash).length
  let result = []
  let start = 0
  let end = 0
  while (end < s.length) {
    // calcuation
    if (hash[s[end]] !== undefined) {
      hash[s[end]]--
      hash[s[end]] === 0 && count--
    }
    if (end - start + 1 != k) {
      end++
    } else if (end - start + 1 === k) {
      if (count === 0) {
        result.push(start)
      }
      hash[s[start]]++
      if (hash[s[start]] === 1) {
        count++
      }

      start++
      end++
    }
  }

  return result
}

console.log("reuslt", findAnagrams("cbaebabacd", "abc"))
