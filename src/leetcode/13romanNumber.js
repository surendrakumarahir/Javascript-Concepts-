function romanNumberToInt(s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0

  for (let i = 0; i < s.length; i++) {
    const curr = sym[s[i]]
    const next = sym[s[i + 1]]
    if (curr < next) {
      total += next - curr
      i++
    } else {
      total += curr
    }
  }

  return total
}

//Input: s = "MCMXCIV"
//Output: 1994

const result = romanNumberToInt("MCMXCIV")
console.log(result)
console.log(romanNumberToInt("III"))
