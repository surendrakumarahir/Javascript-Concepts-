
let arr = [1, 2, 3, 4];

Array.prototype.customReduce = function(cb, acc){
   // let acc = null;
   let count = 0;
   if(acc === undefined) {
    acc=this[0];
    count = 1;
   }
    for(let i=count; i < this.length; i++) {
         acc = cb(acc, this[i], i, this)
    }
     return acc;
}

Array.prototype.reduceAlbums = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue
  
    for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this)
      } else {
        accumulator = this[i]
      }
    }
    return accumulator
  } 

const result = arr.reduce(function (acc, item, index, arr){
    console.log(acc, item);
    return item+acc;
})

console.log("k========================");

const result1 = arr.reduceAlbums(function (acc, item, index, arr){
        console.log(acc, item);
    return item+acc;
})

console.log("=========================");

const result3 = arr.reduce(function (acc, item, index, arr){
    console.log(acc, item);
    return item+acc;
})

console.log("result", result, result1, result3);