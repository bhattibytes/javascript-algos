// Given two strings, find the minimum number of edits/operations required 
// to convert the first string into the second string, given that the only 
// operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the 
// respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // create a matrix
  var matrix = [];
  // iterate through str1
  for (var i = 0; i < str1.length + 1; i++) {
    // push an array of str2.length + 1 0's to matrix
    matrix.push(new Array(str2.length + 1).fill(0));
  }
  // iterate through matrix
  for (var i = 0; i < matrix.length; i++) {
    // set first element of each array to i
    matrix[i][0] = i;
  }
  // iterate through matrix[0]
  for (var i = 0; i < matrix[0].length; i++) {
    // set first element of each array to i
    matrix[0][i] = i;
  }
  // iterate through matrix
  for (var i = 1; i < matrix.length; i++) {
    // iterate through matrix[i]
    for (var j = 1; j < matrix[i].length; j++) {
      // if str1[i - 1] === str2[j - 1]
      if (str1[i - 1] === str2[j - 1]) {
        // set matrix[i][j] to matrix[i - 1][j - 1]
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        // set matrix[i][j] to 1 + min of matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }
  }
  // return matrix[str1.length][str2.length]
  return matrix[str1.length][str2.length];
}

console.log(editDistance('cat', 'cut')); // 1
console.log(editDistance('wednesday', 'sunday')); // 5
console.log(editDistance('hackerrank', 'hackreactor')); // 6
console.log(editDistance('abc', 'yabd')); // 2
console.log(editDistance('xabc', 'abcx')); // 2
console.log(editDistance('abc', 'abc')); // 0
