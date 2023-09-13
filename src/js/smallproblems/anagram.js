const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    throw "not an Anagaram"
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

console.log(isAnagram("anagram", "nagarme"))
