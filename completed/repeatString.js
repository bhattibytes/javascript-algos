// Write an algorithm that takes two inputs - a string and a number. The function should repeat the given string (first argument) for the number of times (second argument) provided. It should return, i.e. output, a single string.

const repeatStringNumTimes = function(string, times) {
  // create result string to store string
  let str = '';
  // loop to the amount of "times" it should be repeated 
  for (let i = 0; i < times; i++) {
  // add the string to the result string 
  str += string;
  }
  // return the result string
  return str;
}

let res = repeatStringNumTimes("apple", 2); // Should return "appleapple"
console.log(res);