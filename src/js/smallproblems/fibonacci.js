//0, 1, 1, 2, 3, 4
// 0
// 0+1

// function fibonacci(num) {
//   let secondLast = 0;
//   let last = 1;
//   if (num === 1) {
//     return [0, 1, 1];
//   }
//   if (num === 0) {
//     return [0];
//   }
//   let currentValue = 1;
//   let arr = [0];
//   while (currentValue < num) {
//     /// lastValue = currentValue
//     arr.push(currentValue);
//     currentValue = secondLast + last;
//     secondLast = last;
//     last = currentValue;
//   }

//   return arr;
// }

// console.log(fibonacci(200));

// // easy to understand

// function febo(number) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;
//   let result = [];
//   for (let i = 1; i <= number; i++) {
//     result.push(n1);
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
//   return result;
// }

// console.log(febo(10));

function fibonacci(n) {
  if (n === 1) return [0]
  if (n === 2) return [0, 1]
  let fib = [0, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}
fibonacci(3)

/// fatorial // 4 => 4*3*2*1
function factorial(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

factorial(4)

// prime number

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

isPrime(4)
isPrime(5)

// power of two --> 24 power of 2 or not 2*2*2*2*2

function powerOfTow(n) {
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

powerOfTow(2)
powerOfTow(23)
powerOfTow(25)

// big O(n)

function powerOfBitwise(n) {
  if (n < 1) {
    return false
  }
  return (n & (n - 1)) === 0
}
