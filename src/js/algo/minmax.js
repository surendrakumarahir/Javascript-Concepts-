const findMinMax = (arr) => {
    let min=arr[0];
    let max = arr[0];
  
     for(let i=0; i<arr.length; i++) {
       if(arr[i]>max) {
           max = arr[i];
       } else if(arr[i]<min) {
           min = arr[i];
       }
     }
    return {min: min, max: max}
  }
  
  console.log(findMinMax([1, 2, 100, 3, 5]))