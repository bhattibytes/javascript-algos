// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const findStringIndex = function(haystack, needle) {
  // create a pointer for the needle
  let i = 0;
  let j = 0;
  // create a pointer for the haystack
  let index = -1;
  // iterate through the haystack
  while (i < haystack.length) {
    // if the needle pointer is at the end of the needle
    if (haystack[i] === needle[j]) {
      // set the index to the current haystack pointer
      if (j === 0) {
        index = i;
      }
      // increment the needle pointer
      j++;
    } else {
      // reset the needle pointer
      j = 0;
      index = -1;
    }
    // increment the haystack pointer
    i++;
    // if the needle pointer is at the end of the needle
    if (j === needle.length) {
      // return the index
      return index;
    }
  }
  // return the index
  return index;
};

console.log(findStringIndex("bgasaNOTbutsad", "sad")); // 11
console.log(findStringIndex("leetcode", "leeto")); // -1