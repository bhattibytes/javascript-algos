/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // create an inner recursive function that takes in a number and returns a string
  let innerRecurse = (num) => {
    // create varaibles for place, placeValueNum, toBeRecrused, and results
    let place;
    let placeValueNum;
    let toBeRecrused;
    let results = '';
    // if the number is in the numbersToWords object
    if (numbersToWords[num]) {
      // set results to the value of the number in the numbersToWords object
      results = numbersToWords[num];
      // else if the number is less than 100
      } else if (num < 100) { 
        // set placeValueNum to the number rounded down to the nearest 10
        placeValueNum = Math.floor(num / 10) * 10;
        // set toBeRecrused to the number modulo 10
        toBeRecrused = num % 10;
        // set results to the value of the number in the numbersToWords object
        results = numbersToWords[placeValueNum] + '-' + numbersToWords[toBeRecrused];
      // else if the number is less than 1000
      } else {
        if (num < 1000) {
        // set place to 100
        place = 100;
        } else {
        // otherwise set place to 1000
        place = 1000;
          // while place * 1000 is less than or equal to the number
          while (place * 1000 <= num) {
          // multiply place by 1000
          place *= 1000;
          }
        }
      // set placeValueNum to the number rounded down to the nearest place
      placeValueNum = Math.floor(num / place);
      // set toBeRecrused to the number modulo place
      toBeRecrused = num % place;
      // set results to the value of the number in the numbersToWords object
      results = innerRecurse(placeValueNum) + ' ' + numbersToPlace[place];
      let restOfNumber;
      // set restOfNumber to the value of the number in the numbersToWords object
      restOfNumber = innerRecurse(toBeRecrused);
      // if toBeRecrused is not zero
      if (restOfNumber !== 'zero') {
        // set results to results plus the value of the number in the numbersToWords object
        results += ' ' + restOfNumber;
      }
    }
    // return results
    return results;
  }
  // return the result of calling the inner recursive function on this
  return innerRecurse(this);
};

console.log((7).toEnglish()) // seven
console.log((575).toEnglish()); // > "five hundred seventy-five"
console.log((78193512).toEnglish()); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"