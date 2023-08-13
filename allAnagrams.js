/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // create output array to store anagrams 
  let anagrams = [];
  // create inner function to generate anagrams
  let generateAnagrams = function(ana, str) {
    // base case: if string is empty, push anagram to output array
    if (str === '') {
      anagrams.push(ana);
    }
    // iterate through string
    for (let i = 0; i < str.length; i++) {
      // recursively call inner function with anagram + current letter removed from string
      generateAnagrams(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };
  // call inner function with empty string and input string
  generateAnagrams('', string);
  // return output array
  return anagrams;
};

let anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]