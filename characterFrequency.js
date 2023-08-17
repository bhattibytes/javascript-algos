/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  // create a result array to store the results
  let result = [];
  // create a storage object to store the characters and their frequencies
  let storage = [];
  // iterate through the string
  for (let i = 0; i < string.length; i++) {
    // if the character is not in the storage object
    if (!storage[string[i]]) {
      // add the character to the storage object and set its value to 1
      storage[string[i]] = 1;
    } else {
      // otherwise, increment the character's value in the storage object
      storage[string[i]]++;
    }
  }
  // iterate through the storage object
  for (let key in storage) {
    // push the key and value into the result array
    result.push([key, storage[key]]);
  }
  // sort the result array by the second element in each subarray
  result.sort((a, b) => b[1] - a[1]);
  // return the result array
  return result;
};


let res = characterFrequency('miaaiaaippi');
console.log(res);

let res2 = characterFrequency('mmmaaaiiibbb');
console.log(res2);