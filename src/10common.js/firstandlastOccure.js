// find first and last occurance of value in sorted arrary.
/* 
input 
arr = [2, 4, 5, 5, 5, 5, 5, 9, 10, 12];
output : [2, 6]
*/

// if sorted array meanse can be use binary search
// leetcode 34
function searchRange(nums, target) {
    if(nums === 0) return [-1, -1]
   let p1 = 0;
   let p2 = nums.length-1
   let start = -1;
   let end = -1;
   while(p1 <= p2) {
       let mid = Math.floor((p1+p2)/2);
     if(target === nums[mid]) {
        start = mid;
        p2 = mid-1;
       } else if(target > nums[mid]) {
        p1 = mid+1;
       } else if(target < nums[mid]) {
        p2 = mid -1;
       }
    }

  //  console.log("start", start);
    p1=0; p2=nums.length-1;
    while(p1 <= p2) {
        let mid = Math.floor((p1+p2)/2);
      if(target === nums[mid]) {
         end = mid;
         p1 = mid+1;
        } else if(target > nums[mid]) {
         p1 = mid+1;
        } else if(target < nums[mid]) {
         p2 = mid -1;
        }
     }

   // console.log("working", start, end);

   return start <= end ? [start, end] : [-1, -1];

}

let nums = [2, 3, 5, 6, 7, 7, 9, 9, 10];

console.log(searchRange(nums, 7));