/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ")
  //edge cases:
  if (pattern.length !== s.length) return false
  if (new Set(pattern).size !== new Set(s).size) return false

  let hash = {}
  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      hash[pattern[i]] = s[i]
    }

    if (s[i] !== hash[pattern[i]]) return false
  }
  return true
}
