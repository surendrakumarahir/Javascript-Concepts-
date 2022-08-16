console.log("map");

Array.prototype.customFind = function(cb) {
   // let arr = [];
   for(let i=0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
        return this[i]
    }
   }

   return undefined;
}

const data = [1, 2, 3, 4];

const  result = data.find(function (item, index, arr){
  return item === 3;
})

const result1 = data.customFind(function (item, index, arr){
    return item == 3;
  })

console.log(result, result1)