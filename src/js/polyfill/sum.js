let arr = [1,2,3,4];
let result = arr.some((elem) => elem<2);
console.log(result);

Array.prototype.customSum = function(cb) {
    for(let i=0; i<this.length; i++) {
        if(cb(this[i], i , this)) {
            return true;
        }
    }
 return false;
}

let result2 = arr.customSum((item)=> {
    return item < 2
})

console.log("result2", result2);