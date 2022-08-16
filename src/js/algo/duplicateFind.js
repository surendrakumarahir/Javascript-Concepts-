function duplicate(arr) {
    let obj={};
    arr.forEach((item, index) => {
       if(obj[item]) {
          obj[item] = obj[item]+1;
       } else {
            obj[item] = 1;
        }
    })
    let pushDuplicate = [];
    for(let key in obj) {
      if(obj[key] > 1) {
        pushDuplicate.push(key);
      }
   } 
    return pushDuplicate;
  }
  
  console.log(duplicate([2,3,4,1,4,2]));