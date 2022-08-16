// function abc() {
//     var a = 10;
//     function aabc() {
//        console.log(a);
//     }
//     aabc();
// }

// abc();


// you can pass funciton in funaciton as well

// function abc() {
//     var a = 10;
    
//     aabc();
// }

// abc(function aabc() {
//     console.log(a);
//  });

 // most important

//  function abc() {
//     var a = 10;
//    return function aabc() {
//         console.log(a);
//      };
//     //aabc();
//     //return aabc;
// }
// var z = abc();
// console.log(z); // nut just function , but funtion with laxical stop
// z(); // mantain laxical stop


// expamples
// function x() {
//     var i = 1;
//     for(let i=1; i <=10; i++) {
//         setTimeout(() => {
//            console.log(i);
//        }, i*1000)
//      }
//    }
//    x();

   // second using closure

//    function x() {
//     var i = 1;
//     for(let i=1; i <=10; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000)
//         }
//         close(i);
//      }
//    }
//    x();


// hide data from outer funciton // encapsulate data to function 

// function counter() {
//     var count = 0;
//      return function() {
//          count++;
//         console.log(count);
//      }
// }

// let counter1 = counter();
// counter1();
// counter1();

// let counter2 = counter();
// counter2();
// counter2();

// use constrution for increase count and decrese

function Counter() {
    var count = 0;
     this.increse =  function() {
         count++;
        console.log(count);
     }
     this.decrease =  function() {
        count--;
       console.log(count);
    }
}

let counter1 = new Counter();

counter1.increse();
counter1.decrease();

