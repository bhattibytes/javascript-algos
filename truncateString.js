// Write a function that truncates a string (first argument) if it is longer than the given maximum string length (second argument) as a given input. It should return a single, truncated string. However, be sure that the last 3 characters of the returned string are an ellipsis (...).
 const truncate = function (str, num) {
  if (num <= 4 ) {
    return '...'
  }
  // create a result string to store the new string
  let truncate = '';
  // create a variable to store the sliced part of the string accounting for a space and ...
  let sliced = str.slice(0, num - 4).length;
  // loop over a slice input string from the begining to num
  for (let i = 0; i < sliced; i++) {
  // Add back each character to result string
  truncate += str[i];
  }
  // add the ... at the end
  truncate += " ..."
  // return the result string
  return truncate;
}

let res = truncate("This is a string", 8); // Should return "This ..."
console.log(res);

// We can also simplify this function down to a single simple return statement 

const simpleTruncate = function (str, num) {
  if (num <= 4 ) {
    return '...'
  }
  return str.slice(0, num - 4) + ' ...'
}

let res2 = simpleTruncate("This is a string", 8); // Should return "This ..."
console.log(res2);