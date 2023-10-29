/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  // pick a value in the array as a pivot
  var pivot = array[0];
  // partition all the elements of the array into two arrays, based on
  // if they are larger or smaller than the pivot
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // recursively sort the two halves
  if (left.length > 1) {
    left = quicksort(left);
  }
  if (right.length > 1) {
    right = quicksort(right);
  }
  // combine the two arrays and the pivot into a sorted array
  return left.concat(pivot, right);
};


console.log(quicksort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(quicksort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(quicksort([1, 2, 3, 5, 4])); // [1, 2, 3, 4, 5]
console.log(quicksort([1, 2, 3, 5, 4, 6])); // [1, 2, 3, 4, 5, 6]
