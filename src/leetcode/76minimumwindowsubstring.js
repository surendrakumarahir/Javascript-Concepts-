/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let mp = new Map()
  let l = 0
  let r = 0
  for (let i = 0; i < t.length; i++) {
    if (mp.get(t[i])) {
      mp.set(t[i], (mp.get(t[i]) || 0) + 1)
    } else {
      mp.set(t[i], 1)
    }
  }
  let count = mp.size
  let min = Infinity
  let subStirng = ""
  while (r < s.length) {
    if (mp.get(s[r]) !== undefined) {
      mp.set(s[r], mp.get(s[r]) - 1)
      mp.get(s[r]) === 0 && count--
    }
    if (count > 0) {
      r++
    } else if (count === 0) {
      while (count === 0) {
        if (min > r - l + 1) {
          min = r - l + 1
          subStirng = s.slice(l, r + 1)
        }

        mp.get(s[l]) !== undefined && mp.set(s[l], mp.get(s[l]) + 1)
        mp.get(s[l]) === 1 && count++
        l++
      }
      r++
    }
  }
  return subStirng
}

console.log("result", minWindow("ADOBECODEBANC", "ABC"))

///https://www.youtube.com/watch?v=iwv1llyN6mo&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=13
