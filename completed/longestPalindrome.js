/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const isPalindrome = function (string) {
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    // if the current character is not equal to the character at the opposite end of the string
    if (string[i] !== string[string.length - 1 - i]) {
      // return false
      return false;
    }
  }
  // return true
  return true;
};

const longestPalindrome = function (string) {
  // create a variable to store the longest palindrome
  let longest = '';
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    // iterate through the string again
    for (let j = i + 1; j <= string.length; j++) {
      // create a variable to store the current substring
      let substring = string.slice(i, j);
      // if the current substring is a palindrome
      if (isPalindrome(substring)) {
        // if the current substring is longer than the longest palindrome
        if (substring.length > longest.length) {
          // reassign the longest palindrome to the current substring
          longest = substring;
        }
      }
    }
  } 
  // return the longest palindrome
  return longest;
};

let res = longestPalindrome('My dad is a racecar athlete');
console.log(res);