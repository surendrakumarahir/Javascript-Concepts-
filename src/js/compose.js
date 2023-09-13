const sum = (a) => {
  return a + 2;
};

const multiply = (a, b) => {
  return a * 4;
};

const divide = (a) => {
  return a / 2;
};

const composeCustom = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const evaluate = composeCustom(sum, multiply, divide);
console.log(evaluate(5));
