/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // create min, max, and mid variables as pointers to the array
  var min = 0;
  var max = array.length - 1;
  var mid = Math.floor((min + max) / 2);
  // while the min is less than or equal to the max
  while (min <= max) {
    // if the mid is equal to the target, return the mid
    if (array[mid] === target) {
      return mid;
      // otherwise, if the mid is less than the target, set the min to mid + 1
    } else if (array[mid] < target) {
      min = mid + 1;
    } else {
      // otherwise, set the max to mid - 1
      max = mid - 1;
    }
    // reassign the mid to the new mid
    mid = Math.floor((min + max) / 2);
  }
  // return null if the target is not found
  return null;
};


console.log(binarySearch([1, 2, 3, 4, 5], 4), 'should be 3');
console.log(binarySearch([1, 2, 3, 4, 5], 8), 'should be null');