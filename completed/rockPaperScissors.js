/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

const rockPaperScissors = function (num) {
  // create a result array to store all possible combinations 
  let results = [];
  // create a plays array with the 3 possible plays
  let plays = ['R', 'P', 'S'];
  // create a recursive function that takes in the 
  //number of rounds left and the plays so far
 const recurse = function(roundsLeft, playedSoFar) {
    // base case: if roundsLeft is 0, push the playsSoFar into the results array
    if (roundsLeft === 0) {
      results.push(playedSoFar);
      return;
    }
    // iterate through the plays array
    for (let i = 0; i < plays.length; i++) {
      // call the recursive function with roundsLeft - 1 and the playsSoFar + the current play
      recurse(roundsLeft - 1, playedSoFar + plays[i]);
    }
  };
  // call the recursive function with num and an empty string
  recurse(num, '');
  // return the results array
  return results;
};


console.log(rockPaperScissors(4));
