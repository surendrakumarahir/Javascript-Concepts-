//Every object in JavaScript has a built-in property, which is called its prototype. 
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a
// prototype chain. The chain ends when we reach a prototype that has null for its own prototype
let arr = ["test", "tess"];
let obj = {
    name: "surenda",
    lastName: "kumar",
    fullName: function() {
        console.log(`${this.name} ${this.lastName}`);
    }
}

function fun(params) {
    console.log("working");
}

// all come with properties 

// arr.__proto__ // array prototype
// arr.__proto__.__proto__// object prototype
// arr.__proto__.__proto__.__proto__// null end of prototype chain
// Array.prototype // array prototype
// Array.prototype.__proto__ // obect prototype

// obj.__proto__ // object  prototype
// obj.__proto__.__proto__ // null
// Object.prototype //  object prototype
// Object.prototype.__proto__ // null


// fun.__proto__ // function prototype
// fun.__proto__.__proto__ // ojb prototype
// fun.__proto__.__proto__.__proto__ // null

// Function.prototype // function prototype
// Function.prototype.__proto__ // function prototype  
// everty thing in javascript is nothing but just a object