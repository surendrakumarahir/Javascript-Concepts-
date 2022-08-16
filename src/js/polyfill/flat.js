function customFlat(arr, depth=1) {
    let result = []
    arr.forEach(element => {
         if(Array.isArray(element) && depth > 0) {
            result.push(...customFlat(element, depth-1))
         } else {
            result.push(element);
         }
    });

    return result;
}

let arrValue = [0, 1, 3, 4, [2, 3], [6, [5, 9]]]

console.log(customFlat(arrValue, 2));
