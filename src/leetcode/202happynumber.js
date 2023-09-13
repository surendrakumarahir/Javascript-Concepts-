function isHappy(n) {
  const squares = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  }
  const hash = {}
  let temp = n
  while (hash[temp] !== 1) {
    temp = temp
      .toString()
      .split("")
      .reduce((acc, i) => {
        acc += squares[i]
        return acc
      }, 0)
    if (!hash[temp]) {
      hash[temp] = true
    } else {
      return false
    }
    if (temp === 1) return true
  }
}

console.log(isHappy(19))
