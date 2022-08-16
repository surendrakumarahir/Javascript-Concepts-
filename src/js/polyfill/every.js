let arr = [1,2,3,4];
let result = arr.every(function(elem) {
   return  elem<5
});
console.log(result);

Array.prototype.customEvery = function(cb) {
    let result = false;
    for(let i=0; i< this.length; i++) {
        if(cb(this[i], i, this)) {
            result = true;
        } else {
            return false;
        }
    }
    return result;
}

let result2 = arr.customEvery((item, i, arr) => {
   return item < 5;
})

console.log("result2", result2);

