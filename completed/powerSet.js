/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

const powerSet = function(str) {
  // create a storage variable assign to an array with an empty string 
  let store = [''];
  // create helper function that takes in a prefix and a string 
  const addToStore = function (prefix, str) {
    // base case: if the string is empty, return an array with an empty string
    if ( !str.length ) {
      return [''];
    }
    // recursive case:
    for ( let i = 0; i < str.length; i++ ) {
      // create a variable that is the prefix plus the current letter
      let pre = prefix + str[i];
      // if the storage array does not include the prefix, push the prefix into the storage array
      if ( !store.includes(pre) ) {
        store.push(pre);
      }
      // call the helper function with the prefix and the string minus the current letter
      addToStore(pre, str.slice(i+1));
    }
  }
  // call the helper function with an empty string and the input string
  addToStore('', str);
  // return the storage array
  return store;
};

let res1 = powerSet("abc")
console.log("should be [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]: ", res1);

let res2 = powerSet("jump")
console.log('should be ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]', res2);