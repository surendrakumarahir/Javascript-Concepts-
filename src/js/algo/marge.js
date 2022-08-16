//marge to sorted array [10, 20] , [5, 15, 23, 30]

function marge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j=0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(marge([10, 16, 20], [5, 15, 25, 30]));