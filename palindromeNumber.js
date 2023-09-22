// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) { 
  // any string this exactly one character is a palindrome
  // any string that is negative can not be a palindrome
  // first we will convert the number to a string 
  // next loop over the string and check if the first character is equal to the last character
  let stringNum = x.toString();
  if (stringNum.length === 1) {
    return true;
  }
  if (x < 0) {
    return false;
  }

  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121), 'should be true'); // true
console.log(isPalindrome(-121), 'should be false'); // false
console.log(isPalindrome(10), 'should be false'); // false
console.log(isPalindrome(-101), 'should be false'); // false
console.log(isPalindrome(0), 'should be true'); // true
console.log(isPalindrome(1), 'should be true'); // true
console.log(isPalindrome(11), 'should be true'); // true
console.log(isPalindrome(111), 'should be true'); // true
