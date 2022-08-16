let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];


function unionFn() {
    let union = {};

    for(let i=0; i < arr1.length; i++) {
        if(!union[arr1[i]]) {
            union[arr1[i]] = 1;
        }
    }
   
    for(let i=0; i < arr2.length; i++){
        if(!union[arr2[i]]) {
           union[arr2[i]] = 1;
        }
    }

   return Object.keys(union);
    // for(let i=0; i < arr2.length; i++) {
    //     if(!arr1.includes(arr2[i])) {
    //         union.push(arr2[i])
    //     }
    // }
}


console.log("union", unionFn(arr1, arr2));