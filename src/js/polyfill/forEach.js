console.log("for each");

Array.prototype.customForEach = function(cb) {
   for(let i=0; i < this.length; i++) {
      cb(this[i], i, this)
   }
}

const data = [1, 3, 4, 5];

data.forEach(function (item, index, arr){
console.log(item);
})

data.customForEach((item, i, arr) => {
    console.log(item, i, arr)
})