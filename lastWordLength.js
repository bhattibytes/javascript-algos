// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  // solve for edge cases 
  // string is empty
  if (s.length === 0) return 0
  // string only has one element ie there are no spaces
  if (s.indexOf(' ') === -1) return s.length 
  // split the string into an array of strings (words)
  // simply return the length of the last element 
    let arrayOfWords = s.split(' ');
    return arrayOfWords[arrayOfWords.length - 1].length 
};


console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('This is a sentence with a lot of words')) // 5
console.log(lengthOfLastWord('I am me')) // 2
console.log(lengthOfLastWord('one')) // 3
console.log(lengthOfLastWord('Hello who are u')) // 1
console.log(lengthOfLastWord('')) // 0
