/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  let hash1 = {}
  let hash2 = {}
  for (let i = 0; i < s.length; i++) {
    if (!hash1[s[i]]) {
      hash1[s[i]] = t[i]
    } else if (hash1[s[i]] != t[i]) {
      return false
    }
    if (!hash2[t[i]]) {
      hash2[t[i]] = s[i]
    } else if (hash2[t[i]] != s[i]) {
      return false
    }
  }
  return true
}

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))

//// another solution

var isIsomorphic2 = function (s, t) {
  // Base case: for different length of two strings...
  if (s.length != t.length) return false
  // Create two maps for s & t strings...
  const map1 = {}
  const map2 = {}
  // Traverse all elements through the loop...
  for (let i = 0; i < s.length; i++) {
    console.log(map1, map2)
    // Compare the maps, if not equal, return false...
    if (map1[s[i]] != map2[t[i]]) return false
    // Insert each character if string s and t into seperate map...
    map1[s[i]] = i + 1
    map2[t[i]] = i + 1
  }

  return true // Otherwise return true...
}
