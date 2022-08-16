// polyfill for apply

Function.prototype.myApply = function(obj, args) {
    if(typeof this !== 'function') {
        throw new Error(this + "it's nota a callback function")
    }
    obj.fn =this;
    return obj.fn(...args)
}

console.log(test.myApply(obj, ['test', "java"]));