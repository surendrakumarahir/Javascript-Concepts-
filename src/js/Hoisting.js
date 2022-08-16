// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, 
// variables or classes to the top of their scope, prior to execution of the code.
//  Hoisting allows functions to be safely used in code before they are declared.

console.log(x);
console.log(test());

function test() {
    console.log("test fucntion");
}

var x = 4;

// output: 
// x : undefine
// test function

// what is dead time zone
// let const initialize  in hosting but not define
// so time b/w hoisted and define is templary time zone 


// Temporal Dead Zone explained
// This is what the TDZ is: the term to describe the state where variables
//  are un-reachable. They are in scope, but they aren't declared.

// The let and const variables exist in the TDZ from the start 
// of their enclosing scope until they are declared.

// You could also say that the variables exist in the TDZ from the place they get 
// bound (when the variable gets bound to the scope it's inside) until it is declared (when a name is reserved in memory for that variable).