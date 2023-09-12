// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  // if target is greater than last element, return length of array
  if ( target > nums[nums.length - 1] ) {
    // return the index after the end of the array
    return nums.length; 
  }
  // if target is less than first element, return 0
  if ( target < nums[0] ) {
    return 0;
  }
  // iterate through array
  for ( let i = 0; i < nums.length; i++ ) {
    // if target is between two elements, return index of second element
    if (nums[i] < target && target < nums[i + 1] ) {
      return i + 1;
    }
    // if target is equal to element, return index of element
    if ( target === nums[i] ) {
      return i; 
    }
  }
};

const searchInsertLogn = function(nums, target) {
  // create start, end, and mid variables
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  // while start is less than or equal to end
  while ( start <= end ) {
    // if mid is equal to target, return mid
    if ( nums[mid] === target ) {
      return mid;
      // if mid is less than target, set start to mid + 1
    } else if ( nums[mid] < target ) {
      start = mid + 1;
      // if mid is greater than target, set end to mid - 1
    } else {
      end = mid - 1;
    }
    // reassign mid to the middle of start and end
    mid = Math.floor((start + end) / 2);
  }
  // return start
  return start;
};

console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4
console.log(searchInsert([1,3,5,6], -1)) // 0

console.log('-----------------------------')

console.log(searchInsertLogn([1,3,5,6], 5)) // 2
console.log(searchInsertLogn([1,3,5,6], 2)) // 1
console.log(searchInsertLogn([1,3,5,6], 7)) // 4
console.log(searchInsertLogn([1,3,5,6], -1)) // 0