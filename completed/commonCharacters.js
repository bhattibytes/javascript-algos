/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



const commonCharacters = function(string1, string2) {
  // create result string to store the characters that are the same 
  let results = '';
  // loop over the first string and hold the current letter 
  for ( let i = 0; i < string1.length; i++ ) {
    let current = string1[i];
    // loop over the second string comparing the current letter to each letter of the second string
    for ( let k = 0; k < string2.length; k++ ) {
      // if they match add that to the results string and break out of the loop 
      if (current === string2[k]) {
        results += current
        break;
      }
    }
  }
  // return the results 
  return results;
};

let res = commonCharacters('acexivou', 'aegihobu');
console.log('should equal "aeiou" ', res);
