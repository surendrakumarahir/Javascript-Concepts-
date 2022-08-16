//https://shinjukudev.medium.com/algorithm-interview-questions-and-answers-js-c44f0872b9b2
let arr = [1,5,6,1,0,1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    
    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  
    
    sumsLookup[arr[i]] = true;
  }
  
  return output;
}
console.log(findSumPairs(arr, 6));