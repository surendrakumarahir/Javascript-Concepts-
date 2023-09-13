// Function.prototype.myCall = function(obj, ...arg) {
//     if(typeof this !== 'function') {
//         throw new Error("should be an function")
//     }
//     obj.fn = this;
//     return obj.fn(...arg);
// }

// function test(a, b, c) {
//    return this.firstName + " " + a + " " + b + " " + c;
// }

// console.log(test.myCall({firstName: 'surendra'}, 1, 2, 3));

// Function.prototype.myApply = function(obj, arg) {
//     if(typeof this !== 'function') {
//         throw new Error("should be an function")
//     }
//     obj.fn = this;
//     return obj.fn(...arg);
// }

// console.log(test.myApply({firstName: 'surendra'}, [1, 2, 33]));

// Function.prototype.myBind = function(obj, ...args) {
//     if(typeof this !== 'function') {
//         throw new Error("should be an function")
//     }
//     const context = this;
//    return function(args2) {
//     return context.apply(obj, [...args, args2])
//    }
// }

// const bindDAta = test.myBind({firstName: 'surendra'}, 1, 2)
// console.log(bindDAta(4));

// Array.prototype.myForEach = function(cb) {
//    for(let i=0; i < this.length; i++) {
//       cb(this[i], i, this)
//    }
// }

const arrData = [2, 3, 4, 5, 6];

// arrData.myForEach((item, i, arr) => {
//     console.log(item, i , arr);
// })

// Map

// Array.prototype.customMap = function(cb) {
//     let result = [];
//     for(let i=0; i < this.length; i++) {
//        result.push(cb(this[i], i, this))
//     }
//     return result;
//  }

//  console.log(arrData.customMap((item, i, arr) => {
//     return item*2
//  }))

//Filter

// Array.prototype.customFilter = function(cb) {
//     let result = [];
//     for(let i=0; i < this.length; i++) {
//        if(cb(this[i], i, this)) {
//         result.push(this[i]);
//        }
//     }
//     return result;
//  }

//  console.log(arrData.customFilter((item, i, arr) => {
//     return item === 3 || item === 6
//  }))

// Find

// Array.prototype.customFind = function(cb) {
//     let result = [];
//     for(let i=0; i < this.length; i++) {
//        if(cb(this[i], i, this)) {
//       return this[i];
//        }
//     }
//  }

//  console.log(arrData.customFind((item, i, arr) => {
//     return item === 3
//  }))

// Reduce function
// Array.prototype.customReduce = function(cb, acc) {
//     let accumulator =  acc  === undefined ? undefined : acc;
//     for(let i=0; i < this.length; i++) {
//         if(accumulator === undefined) {
//             accumulator =  this[i];
//         } else {
//             accumulator =  cb(accumulator, this[i], i, this)
//         }

//     }
//     return accumulator
//  }

//  console.log(arrData.customReduce((acc, item, i, arr) => {
//     console.log(acc, item)
//     return acc+item
//  }))

// promise

// const promise = new Promise(function executor(resolve, reject) {
//   resolve(1);
//   reject(-1);
// })

// class CustomPromise {
//  isResolved = false;
//  isReject = false;
//  thisFun;
//  catchFun;
//     resolvedData;
//     rejectData;
//     constructor(executor){
//         const resolve  = (value) => {
//             this.isResolved = true;
//             this.resolvedData = value;
//            if(typeof this.thisFun  === 'function') {
//             this.thisFun(value);
//            }
//         }
//         const reject  = (value) => {
//             this.isReject = true;
//             this.rejectData = value;
//            if(typeof this.catchFun  === 'function' && this.isResolved === false) {
//             this.catchFun(value);
//            }
//         }
//         executor(resolve, reject)
//     }

//     then(fn) {
//       this.thisFun = fn;
//        if(this.isResolved) {
//          fn(this.resolvedData);
//        }
//        return this;
//     }
//     catch(fn) {
//         this.catchFun = fn;
//          if(this.isReject) {
//            fn(this.rejectData);
//          }
//       }
// }

// const custompromise = new CustomPromise(function executor(resolve, reject) {
//     setTimeout(() => {
//         //resolve(12);
//         reject("error")
//     }, 2000)
//    // resolve(12);
//   //  reject(-1);
//   })

//   //custompromise.resolve("test")
//   custompromise.then((value) => {
//     console.log("resolved data", value);
//   }).catch((value) => {
//         console.log(value)
//   })

// Array.prototype.myFilter = function(cb) {
//    let array = [];
//    for(let i=0; i < this.length; i++) {
//     if( cb(this[i], i , this))  {
//       return   array.push(this[i])
//     }
//     }

//    return array;

// }

// let arr = [1, 3, 4]

// console.log(arr.myFilter((item, i , ar) => {
//      return item==3;
// }))

// function addCurrring(a) {
//   return function (b) {
//     if (!b) {
//       return a;
//     } else {
//       return addCurrring(a + b);
//     }
//   };
// }

// console.log(addCurrring(2)(4)(4)());

// const cals = {
//   total: 0,
//   add: function (a) {
//     this.total += a;
//     return this;
//   },
//   multiply: function (a) {
//     this.total *= a;
//     return this;
//   },
//   subtract: function (a) {
//     this.total -= a;
//     return this;
//   },
// };
// const result = cals.add(2).multiply(3).subtract(2).add(4);
// console.log("result", result);

// extend tree on cleck on each one
// function data(test) {
//   console.log("wokring");
// }

//obj[]
