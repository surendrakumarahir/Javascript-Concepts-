function palindrom(number) {
  let newNumber = number.toString().split("").reverse().join("");
  if (newNumber == number) return true;
  return false;
}

console.log(palindrom(23112));
