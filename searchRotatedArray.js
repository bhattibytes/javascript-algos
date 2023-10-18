// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

 

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104
 

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function(nums, target) {
  // create variables for left and right pointers
  let left = 0;
  let right = nums.length - 1;
  // while left is less than or equal to right
  while (left <= right) {
      // create variable for mid point
      let mid = Math.floor((left + right) / 2);
      // if mid is equal to target, return true
      if (nums[mid] === target) {
          return true;
      }
      // if left is equal to mid and mid is equal to right, increment left and decrement right
      if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
          left++;
          right--;
      // if left is less than or equal to mid and if target is greater than or equal to left and target is less than mid
      } else if (nums[left] <= nums[mid]) {
          if (nums[left] <= target && target < nums[mid]) {
              // reassign right to mid - 1
              right = mid - 1;
          } else {
            // otherwise, reassign left to mid + 1
              left = mid + 1;
          }
      // otherwise, if mid is less than or equal to right and target is greater than mid and target is less than or equal to right
      } else {
          if (nums[mid] < target && target <= nums[right]) {
              // reassign left to mid + 1
              left = mid + 1;
          } else {
              // otherwise, reassign right to mid - 1
              right = mid - 1;
          }
      }
  }
  // if target is never found return false 
  return false; 
};

console.log(search([2,5,6,0,0,1,2], 0)); // true
console.log(search([2,5,6,0,0,1,2], 3)); // false
console.log(search([1,0,1,1,1], 0)); // true
console.log(search([1,1,1,0,1], 0)); // true
console.log(search([1,1,1,1,1], 0)); // false