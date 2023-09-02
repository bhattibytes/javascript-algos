/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// create helper function to sort array in ascending order
Array.prototype.sortAscending = function() {
  this.sort(function(a, b) {
    return a - b;
  });
  return this;
};


const largestProductOfThree = function(array) {
  // sort array in ascending order with helper function
  array = array.slice().sortAscending();
  
  // assign variables for the largest, second largest, and third largest numbers
  let largest = array[array.length - 1];
  let secondLargest = array[array.length - 2];
  let thirdLargest = array[array.length - 3];
  
  // return the largest product of the three largest numbers
  return largest * Math.max(secondLargest * thirdLargest, array[0] * array[1]);
};


let res = largestProductOfThree([2, 1, 3, 7]);
console.log('should be 42 ', res);
