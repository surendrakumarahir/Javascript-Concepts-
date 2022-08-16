// findIndex function returns the index of the first element in the array which satisfies the condition in the callback. 
// If no element satisfies the condition then it returns undefined. 

let arr = [1,2,3,4];
let result = arr.findIndex((elem) => elem>5); // 0
console.log(result);
Array.prototype.myfindIndex = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) return i
    }
    return -1;
}

console.log(arr.myfindIndex(item => item>5))