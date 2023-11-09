/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

const longestRun = function (string) {
  if (string.length === 0) return null;
  let longest = [0, 0];
  let current = [0, 0];
  let currentChar = string[0];
  let currentCount = 0;
  let longestCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === currentChar) {
      currentCount++;
      current[1] = i;
    } else {
      currentChar = string[i];
      currentCount = 1;
      current = [i, i];
    }
    if (currentCount > longestCount) {
      longestCount = currentCount;
      longest = current;
    }
  }
  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

console.log(longestRun('abbbcc')); // [1, 3]
console.log(longestRun('aabbc')); // [0, 1]
console.log(longestRun('abcd')); // [0, 0]
console.log(longestRun('')); // null
