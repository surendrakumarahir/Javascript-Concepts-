// setTimeout() 
//setImmediate()
//process.nextTick()

// 1. setImmediate() -> 
// when you want to execute some function asynconously, but as soon as possible after finishing the current block.
// 2. setTimeout()
// when you want to execute some function asynconously, after some delay and after finishing the current block.
// 3. process.nextTick() 
// callback scheduled using process.nextTick() , will be processed after the execution of the current phase.

setImmediate(() => {
    console.log("called setImmediat");
})
setTimeout(() => {
    console.log("callled settimeout");
}, 0)

process.nextTick(()=> {
    console.log("called nextTick");
})

console.log("current program")


//output
// current program
// called nextTick
//called settimeout
//called setImmediate