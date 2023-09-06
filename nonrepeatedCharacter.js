/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

const firstNonRepeatedCharacter = function(string) {
  // create a variable to store the first nonrepeated character
  let nonrepeated;
  // create a object variable to store the count of each character in the string
  let store = {}
  // loop through the string 
  for ( let i = 0; i < string.length; i++ ) {
    // instantiate the count of each character in the string
    if ( store[string[i]] ) {
      store[string[i]]++
    } else {
      store[string[i]] = 1;
    }
  }
    // check the object to see if the count of the character is 1
    for ( let key in store ) {
      // if so, set the first nonrepeated character to the character
      if ( store[key] === 1 ) {
        nonrepeated = key;
        break;
      }
    }
    return nonrepeated;
  // return the first nonrepeated character
};


let res1 = firstNonRepeatedCharacter('ABA'); // => 'B' 
console.log('should be B: ', res1);

let res2 = firstNonRepeatedCharacter('AACBDB'); // => 'C'
console.log('should be C: ', res2);