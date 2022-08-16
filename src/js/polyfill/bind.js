Function.prototype.mybind = function(obj,  ...args) {
    let context = this;
    if(typeof context !== 'function') {
        throw new Error("its not callable");
    }
    return function(...args2) {
       return  context.apply(obj, [...args, ...args2])
    }
}


function fullName(arg1, arg2) {
    return  "First Name: "+ this.firstName + "Last Name : " + this.lastName + arg1 + arg2;
}


const bind = fullName.mybind({firstName: 'surendra', lastName: 'kumar'}, 'test');
console.log("bind data", bind("test2"));