// console.log("working don't warry");
// Call is a function that helps you change the context of the invoking function. 
//In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.
// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

let name = {
    firstName: "surendra", 
    lastName: "kumar",
    // fullName: function() {
    //     console.log(`${this.firstName} ${this.lastName}`);
    // }
    //insted of this function inside make reusable (outside like below)
}

function fullName (address1, address2) {
    console.log(`${this.firstName} ${this.lastName} address1: ${address1} address2: ${address2}`);
};

//name.fullName();



let name2 = {
    firstName: "test",
    lastName: "kumar"
}

// function borrowing // first arg referenc of this 

fullName.call(name, "address 1 test", "address 2 test");
fullName.call(name2);

// apply only diff use array insted of multiple argument

fullName.apply(name, ["noida sector ", "15 a 149"]);


// bind , it will create a copy of function for example fullName
// this don't call method directly instead return a mathod , and we can run later

let fullNameMathod = fullName.bind(name2, "address1", "address2");
console.log(fullNameMathod);
console.log(fullNameMathod());

