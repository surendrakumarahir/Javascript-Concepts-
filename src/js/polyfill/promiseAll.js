const promise1 = new Promise((resolve, reject) => {
  resolve("solved first");
});

console.log(promise1.then((res) => console.log(res)));

Promise.all([promise1, Promise.resolve(100)]).then((res) =>
  console.log("fdsf", res)
);

const CustomPromiseAll = (promises) => {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((element) => {
      element
        .then((res) => {
          result.push(res);
          if (result.length === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

CustomPromiseAll([promise1, Promise.reject(100)]).then((res) =>
  console.log("final testing", res)
);
