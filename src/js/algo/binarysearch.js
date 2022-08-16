function binarySearch(nums, target) {
    let p1 = 0;
    let p2 = nums.length-1
    while(p1 <= p2) {
        let mid = Math.floor((p1+p2)/2);
        if(nums[mid] === target) {
         return mid
        } else if(target > nums[mid]  ) {
         p1 = mid+1;
        } else if(target < nums[mid]) {
         p2 = mid-1;
        }
 
    }
 
    return "not found";
 
 }
 
 let nums = [2, 3, 5, 6, 7, 7, 9, 10];
 
 console.log(binarySearch(nums, 9));