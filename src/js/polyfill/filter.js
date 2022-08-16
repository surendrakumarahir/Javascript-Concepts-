console.log("map");

Array.prototype.customFilter = function(cb) {
    let arr = [];
   for(let i=0; i < this.length; i++) {
    if(cb(this[i], i, this)) arr.push(this[i]);
   }
   return arr;
}

const data = [{1: "name"},{ 3: "pooja"},  {4: "java"}, {5: "test"}, {3: "lova"}];

const  result = data.filter(function (item, index, arr){
  return Object.keys(item)[0] == 3;
})

const result1 = data.customFilter(function (item, index, arr){
    return Object.keys(item)[0] == 3;
  })

console.log(result, result1)