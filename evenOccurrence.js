/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // store the number of occurrences of each element in an object
  let occurrences = {};
  // loop over the array 
  for (let i = 0; i < arr.length; i++) {
    // if the element is not in the object, add it with a value of 1
    if (!occurrences[arr[i]]) {
      occurrences[arr[i]] = 1;
    } else {
      // otherwise increment the value of the element
      occurrences[arr[i]]++;
    }
  }
  // loop over the array again
  for (let i = 0; i < arr.length; i++) {
    // if the value of the element is even, return it
    if (occurrences[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

