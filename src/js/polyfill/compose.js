const addFive = (x) => {
  return x + 5;
};
const subStractTwo = (x) => {
  return x - 2;
};
const multiplyFive = (x) => {
  return x * 5;
};
// execute function right to left and send output of one funtion to another
const compose = (...functions) => {
  return function (arg) {
    return functions.reduceRight((arg, fn) => fn(arg));
  };
};

// execution is opposite of compose

const pipe = (...functions) => {
  return function (arg) {
    return functions.reduce((arg, fn) => fn(arg), arg);
  };
};

const evaluate = compose(addFive, subStractTwo, multiplyFive);
console.log(evaluate(5));

const evaluate2 = pipe(addFive, subStractTwo, multiplyFive);
console.log(evaluate2(5));
