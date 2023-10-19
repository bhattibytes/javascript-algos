// Create a function that checks if a given input is a boolean.

function boo(bool) {
  // simply return the expression type of bool is a boolean value
  return typeof bool ===  'boolean';
}

let res = boo(null); // Should return false
console.log(res)
