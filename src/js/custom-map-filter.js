// console.log("working");

Array.prototype.mymap = function(callback) {
    let result = [];
    for(let index=0; index < this.length; index++) {
        result.push(callback(this[index], index, this));
    }
     return result;
}

const arr = [1,2,3];

const newArray = arr.mymap((item, index, arr) => {
    return item*3;
});
console.log(newArray);

// Array.prototype.myfilter = function(callback) {
//     let result = [];
//     for(let index; index < this.length; index++) {
//         result.push(callback(this[index], index, this));
//     }
// }

// filter takes an array and function as argumentfunction 
// Array.prototype.myfilter = function(arr, filterFunc) {
//         const filterArr = []; // empty array   
//              // loop though array  
//                for(let i=0;i<arr.length;i++) {    
//                     const result = filterFunc(arr[i], i, arr);      
//                     // push the current element if result is true    
//                     if(result)   
//                     filterArr.push(arr[i]);  
                    
//             return filterArr;
//         }
//     }