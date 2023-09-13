/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hashM = {}

  for (let i = 0; i < magazine.length; i++) {
    if (!hashM[magazine[i]]) {
      hashM[magazine[i]] = 1
    } else {
      hashM[magazine[i]] += 1
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (hashM[ransomNote[i]] >= 1) {
      hashM[ransomNote[i]] -= 1
    } else {
      return false
    }
  }

  return true
}

console.log(canConstruct("aa", "ab"))

/// withour hash

// We have two strings.
// we are iterating over every char in magazine.
// if we find that char in the ransomeNote, we will replace it with an empty string ''. That means we are removing that char from ransomeNote.
// removing all the char of ransomeNote that mathces that char from magazine
// at last if the magazine remains empty string. we return true. else false

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "")
  }

  if (!ransomNote) return true
  else return false
}
