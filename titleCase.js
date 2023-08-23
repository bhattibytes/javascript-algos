// Write a function that will title-case a string as a given input:

const titleCase = function(str) {
  // create a variable initially an empty string to store the new titleCased string
  let stringCased = '';
  // split the string into an array of words
  let arrayOfWords = str.split(' ');
  // loop over the array of words 
  for (let i = 0; i < arrayOfWords.length; i++) {
  // now capitalize the first letter and add it and rest of the word plus a space to the result string
  stringCased += arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1) + ' ';
  }
  // return  the new result string
  return stringCased;
}

let res = titleCase("sky is blue"); //Returns: Sky Is Blue
console.log(res)

