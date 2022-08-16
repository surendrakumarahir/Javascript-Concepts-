let arr = [1,2,3,4];
let result = arr.includes(1); // true
console.log(result);

Array.prototype.myInclude = function(searh, start) {
    for(let i = (start || 0); i < this.length; i++) {
        if(this[i] === searh) return true
    }
    return false;
}

let result2 = arr.myInclude(2);
console.log("result", result2)