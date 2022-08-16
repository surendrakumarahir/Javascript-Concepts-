// const test = {
//     a: 'va',
//     b: 'b',
// }

// // shallow copy 

// let test1 = test;
// test1.a = "new";
// console.log(test);

// deep copy //  spread opereator or Object.assign({}, obj)
const test = {
    a: 'a',
    b: 'b',
}

testCopy = Object.assign({}, test);
testCopy.a = "nesw";
console.log(test);
console.log(testCopy);

// but still issue with child objects  the still shallow cpoy

const obj1 = {
    a: "a",
    b: {
        value: "c",
    }
} 

// const objCopy = Object.assign({}, obj1);
// objCopy.b.value = "new";
// console.log(obj1);

// it modify the old value as well so how to solve this
//To make a deep copy of nested objects, 
//you would have to consider that. One way to prevent 
//that is manually copying all nested objects:

// const objCopy2 = {...obj1, b: {...obj1.b}}
// objCopy2.b.value = "newAgaing";
// console.log(obj1);
// console.log(objCopy2);

// but its not right way anther way
//You simply stringify your object and parse it right after:

const objCopy3 = JSON.parse(JSON.stringify(obj1));
objCopy3.b.value = "parse stirng";
console.log(obj1);
console.log(objCopy3);

// Here, you have to consider that you will not be able to copy custom class instances, 
//so you can only use it when
// you copy objects with native JavaScript values inside.

// same for array as well 