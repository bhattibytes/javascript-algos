// Given the string find the index where the substring starts 
// and return it.  If the subString is not present in the string
// return false

const searchSubString = function(string, subString) {
  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // if the current element is equal to the first element of the subString
    if (string[i] === subString[0]) {
      // create a variable to store the index of the string
      let j = 0;
      // loop through the subString
      while (string[i + j] === subString[j]) {
        // increment the index of the string
        j++;
         // if the current element is equal to the current element of the subString
        if (j === subString.length) {
          // return the index of the string
          return i;
        }
      }
    }
  }
  // if the subString is not present in the string and doesn't return index return false
  return false;
}

console.log(searchSubString('hello', 'll'), '-> 2');
console.log(searchSubString('hello', 'el'), '-> 1');
console.log(searchSubString('hello', 'le'), '-> false');
console.log(searchSubString('hello', 'hello'), '-> 0');
console.log(searchSubString('hello', 'helloo'), '-> false');