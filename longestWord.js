
// Write a function that finds the longest word in a string as a given input:


const longestWord = function(str) {
  // create a longestWord variable to store the longest word
  let longestWord = '';
  // split the str sentence into an array of words
  let arrayOfWords = str.split(' ');
  // set the longest word to the first word in the array of words
  longestWord = arrayOfWords[0];
  // loop over the rest of the array checking if the length of the current longest is longer
  for ( let i = 1; i < arrayOfWords.length; i++ ) {
    //check if the current words is longer than the longest
    if ( longestWord.length < arrayOfWords[i].length ) {
      // if it is reassign the arrayOfWords[i] to be the longestWord
      longestWord = arrayOfWords[i];
    }
  }
  // finally, return the longest word
  return longestWord;
}

let res = longestWord("Find a longest word in a string"); // longest will be returned
console.log("The longest word is: ", res);
