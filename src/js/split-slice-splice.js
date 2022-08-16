console.log("splite");
// split simple conver strin to array

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(",");
console.log(arr);
// also have second params option , which is use for limit arr

let limitArr2 = names.split(",", 2);
console.log(limitArr2);
// string split to latter 
console.log(names.split(''));

// **** splice **// It can do everything: insert, remove and replace elements
//arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr2 = ["I", "study", "JavaScript"];
arr2.splice(1, 1); // from index 1 remove 1 element
console.log( arr2 ); // ["I", "JavaScript"] // 
// Note modified the existing array 
//In the next example we remove 3 elements and replace them with the other two:

let arr3 = ["I", "study", "JavaScript", "right", "now"];
arr3.splice(0, 3, "surendra", "kumar");
console.log(arr3);
// out put :  ['surendra', 'kumar', 'right', 'now']

//Here we can see that splice returns the array of removed elements:
let arr4 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr4.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals.
// For that we need to set deleteCount to 0:

let arr5 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr5.splice(2, 0, "complex", "language");

console.log( arr5 ); // "I", "study", "complex", "language", "JavaScript"

//Negative indexes allowed
//Here and in other array methods, negative indexes are allowed.
 //They specify the position from the end of the array, like here:


// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4

let arr6 = [5, 6, 7, 8];
arr6.splice(-1, 0, 9, 8)
console.log('arr6', arr6);  
//output: [5, 6, 7, 9, 8, 8]

// Slice 
//arr.slice([start], [end])

let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

//Note main difference is ist not modify array return new array instead