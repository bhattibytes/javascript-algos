/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let numsObj = {};
  for ( let i = 0; i < nums.length; i++ ) {
      if ( numsObj[nums[i]] ) {
          numsObj[nums[i]]++
      } else {
          numsObj[nums[i]] = 1;
      }
  }
  console.log(numsObj)
   return Object.keys(numsObj).reduce((a, b) => numsObj[a] > numsObj[b] ? a : b);

};

console.log(majorityElement([2,2,1,1,1,2,2]))