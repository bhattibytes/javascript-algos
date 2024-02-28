// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  // // create varaible to hold the two numbers that add up to target
  // let numbers = [];
  // // loop over the input array stopping at the second last element 
  // for ( let i = 0; i < nums.length - 1; i++ ) {
  //   // create a varaible to store nums at i 
  //   let first = nums[i];
  //   // loop over the input array again starting at the next element and ending at the end of the array 
  //   for ( let k = i+1; k < nums.length; k++ ) {
  //     // create another varaible to store nums at k 
  //     let second = nums[k];
  //     // determine if the first + second add up to the target 
  //     if ( first + second === target ) {
  //       // add first and second into the numbers array 
  //       numbers.push(first, second);
  //       // once we find the first two numbers that sum to the target break out of the loop
  //       break;
  //     }
  //   }
  //   // if we have the two numbers in the array we can break out of the outer loop
  //   if ( numbers.length === 2 ) {
  //     break;
  //   } 
  // }
  // // if no two number add to up to target return a console log
  // if ( numbers.length !== 2 ) {
  //   console.log('No two number add up to the target');
  //   return
  // }
  // // return the numbers array
  // return numbers;

  //OPTIMIZED:
  let numbers = nums.sort((a, b) => a - b);
  let low = 0;
  let high = numbers.length - 1;

  while (high > low) {
      if ((numbers[high] + numbers[low]) > target ) {
          high--
      } 
      if ((numbers[high] + numbers[low]) < target ) {
          low++
      } 
      if ((numbers[high] + numbers[low]) === target ) {
         return [numbers[low], numbers[high]]
      } 
  }
  return [];

}


console.log(twoSum([2,7,11,15], 45)); // '[]'
console.log(twoSum([1,2,3,4,10,4,8,7,90,9], 5)); // [1,4]