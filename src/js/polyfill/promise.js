console.log("promiss ");

let promise = new Promise((resolve, reject) => {
  resolve(1);
  reject(-1);
});

Promise.resolve(100).then(function (value) {
  console.log(value);
});
Promise.reject(200).catch(function (value) {
  console.log(value);
});

promise
  .then(function resolveCallback(value) {
    console.log("value", value);
  })
  .catch(function rejectCallback(error) {
    console.log("error", error);
  });

function MyPromise(executor) {
  let onResolve;
  let onReject;
  this.then = function (handler) {
    // console.log("working123");
    onResolve = handler;
    // handler("test");
    return this;
  };
  this.then = function (handler) {
    // console.log("working123");
    onReject = handler;
    //handler("test");
    return this;
  };
  function resolve(value) {}
  function reject(err) {}
  executor(resolve, reject);
}

const customPromise = new MyPromise(function executor(resolve, reject) {
  resolve(1);
  reject(-1);
});
customPromise.then(function (value) {
  console.log(value);
});

// result.then(r => {
//     console.log(r);
// }).catch(error => {
//     console.log("erro", error);
// })
