//0, 1, 1, 2, 3, 4
// 0
// 0+1

function fibonacci(num) {
    let secondLast = 0;
    let last = 1;
    if(num===1) {
       return [0, 1, 1];
    } 
    if(num === 0) {
     return [0];
    }
    let currentValue = 1;
    let arr = [0];
   while(currentValue < num) {
       /// lastValue = currentValue
       arr.push(currentValue);
        currentValue = secondLast + last;
        secondLast = last;
        last =  currentValue;
      
      
       
    }

    return arr;
}

console.log(fibonacci(200));