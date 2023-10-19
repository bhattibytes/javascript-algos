// Let's say you're provided with multiple arrays of numbers (for simplicity, let's limit this to 3 arrays). Write a function that returns a single array with the largest numbers from the 3 arrays.

  
const largestOfThree = function(arr) {
  // create a storage varaible assigned to an empty array
  let store = [];
  // loop through the input arr
  for ( let i = 0; i < arr.length; i++ ) {
    // assign variables for the inner array and the largest at that index
    let inner = arr[i];
    let largest = arr[i][0];
  // loop over the inner array starting at the second element
    for ( let k = 1; k < inner.length; k++ ) {
      // check if each element is larger than the largest if it is reassign 
      if ( inner[k] > largest ) {
        largest = inner[k];
      }
    }
    // at the end of the inner loop push the largest in the storage array 
    store.push(largest);
  }
  // return storage array which will contain the three largest elements 
  return store;
}

let res = largestOfThree([
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
  [100, 5, 3, 1004]
]); // Should return [27, 39, 1001, 1004]

console.log(res)