// polyfill for call
Function.prototype.myCall = function(obj, ...args) {
    if (typeof this !== 'function') {
      throw new Error(this + "it's not callable");
    }
  //   if (!Array.isArray(arg)) {
  //     throw new TypeError('CreateListFromArrayLike called on non-object')
  //   }
    obj.fn = this;
        return obj.fn(...args);
  }
  
  function test(arg1, arg2) {
   console.log("console.log"+this.name+"=---"+this.lastName+"---jest arg1: "+arg1+"==== arg2: "+arg2)
  }
  let obj = {name: "surendra", lastName: "kumar"}
  console.log(test.myCall(obj, 'test', "java"));