/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var start = 0;
  var end = rotated.length - 1;
  var mid = Math.floor((end - start) / 2);

  while (start <= end) {
    if (rotated[mid] === target) {
      return mid;
    } else if (rotated[start] <= rotated[mid]) {
      if (rotated[start] <= target && target < rotated[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (rotated[mid] < target && target <= rotated[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    mid = Math.floor((end - start) / 2) + start;
  }
  return null;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100)); // null
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 4)); // 0
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 3)); // 6
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 5)); // 1