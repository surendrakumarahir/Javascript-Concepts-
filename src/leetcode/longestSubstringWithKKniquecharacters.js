function longestSubstringWithKUnik(s, k) {
  let i = 0
  let j = 0
  let ans = -1
  let mp = new Map()
  while (j < s.length) {
    mp.set(s[j], (mp.get(s[j]) || 0) + 1)
    if (mp.size < k) {
      j++
    }
    if (mp.size > k) {
      while (mp.size > k) {
        mp.set(s[i], mp.get(s[i]) - 1)
        if (mp.get(s[i]) === 0) {
          mp.delete(s[i])
        }
        i++
      }
      j++
    } else if (mp.size === k) {
      ans = Math.max(ans, j - i + 1)
      j++
    }
  }
  return ans
}

let s = "aabacbebebe"
let k = 3
console.log(longestSubstringWithKUnik(s, k))
