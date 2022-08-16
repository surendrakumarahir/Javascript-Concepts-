console.log("map");

Array.prototype.customMap = function(cb) {
    let arr = [];
   for(let i=0; i < this.length; i++) {
      arr.push(cb(this[i], i, this));
   }
   return arr;
}

const data = [1, 3, 4, 5];

const  result = data.map(function (item, index, arr){
 return item*2
})

const result1 = data.customMap((item, i, arr) => {
    return item*2;
})

console.log(result, result1)