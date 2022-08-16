//one way using bind // one way using function clouser
// Currying is a technique of evaluating function with multiple arguments,
//  into sequence of functions with single argument.In other words,
//   when a function, instead of taking all arguments at one time,
//    takes the first one and return a new function that takes the
//     second one and returns a new function which takes the third one,
//      and so forth, until all arguments have been fulfilled.

//Why it’s useful ?
// Currying helps you to avoid passing the same variable again and again.
// It helps to create a higher order function. It extremely helpful in event handling. See the blog post for more information.
// Little pieces can be configured and reused with ease.

// function multiple(x) {
//     return function(y) {
//         console.log(x*y);
//     }
// }

// multiple(2)(3);


// using bind

// let multiple = function (x, y) {
//     console.log(x*y);
// }

// let multiplyByTwo = multiple.bind(this, 2);
// multiplyByTwo(2);


// function log(date, importance, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
//   }
// log(new Date(), "DEBUG", "some debug"); // log(a, b, c)

// logNow will be the partial of log with fixed first argument

// function log(date){
//     return function(importance) {
//          return function(message) {
//              console.log(`${date.getHours()}: ${date.getMinutes()} ${importance} ${message}`);
//          }
//     }
// }
//console.log("error");
//log(new Date())("DEBUG")("debug check");
// logNow will be the partial of log with fixed first argument
//let logNow = log(new Date());

// use it
// logNow("INFO")("message"); // [HH:mm] INFO message

// let debugNow = logNow("DEBUG");

// debugNow("message"); 




// function log(date, type, message) {
//     console.log(`${date.getHours()}: ${date.getMinutes()} ${type} ${message}`)
// }  

function log(date) {
   return  function (type) {
       return  function (message) {
              console.log(`${date.getHours()}: ${date.getMinutes()} ${type} ${message}`)
           }  
        }  
}  

log(new Date())("BUG")("fount bug");

let nowLog = log(new Date);

nowLog("BUG")("new bug");

let logBugNow = nowLog("Bug");
logBugNow("log bug now");



///
//first solution
// function sum(a) {
  
//      return function (b) {
//          if(!b) {
//              return  a;
//          } else {
//               return sum(a+b);
//          }
        
//      }
//  }

//  sum(1)(2)(3)

//second solution which is best

function currying() {
  // console.log("arg", [...arguments]);
   const arg = [...arguments];

    function addReturn() {
          const arg2 = [...arguments];
         // if(arg2.length > 0 ) {
            return currying(...arg, ...arg2)
         //  } else {
         //   return arg;
         //  }
         
   }
 let total =  arg.reduce((acc, item) => {
      return acc+item
 }, 0)
 addReturn.value = total;
 return addReturn;
   
 
}

console.log(currying(1, 2, 3, 4, 5));
console.log(currying(1)(2)(4,5).value);
console.log(currying(1)(2)(4)(5).value);