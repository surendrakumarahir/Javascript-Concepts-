/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  let objS = {}
  let objT = {}
  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = (objS[s[i]] || 0) + 1
    objT[t[i]] = (objT[t[i]] || 0) + 1
  }
  console.log(objS, objT)
  for (let key in objS) {
    if (objS[key] !== objT[key]) return false
  }
  return true
}

console.log(isAnagram("anagram", "nagaram"))
