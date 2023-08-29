// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument) as a given input.

function findElement(arr, func) {
  let num = 0;
  // loop over the array and check if the function returns true
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      // reassign num to the first element that returns true
      num = arr[i]
      // break out of the loop
      break;
    }
  }
  // return the num that passed the truth test
  return num;
}
let res = findElement([1, 2, 3, 4], num => num % 2 === 0); // Should return 2
console.log(res)

