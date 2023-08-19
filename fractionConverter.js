/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

// create a helper function to find the greatest common divisor
const findGCD = function(a, b) {
  // if b is equal to 0
  if (b === 0) {
    // return a
    return a;
  }
  // return the function with b as the first argument and the remainder of a divided by b as the second argument
  return findGCD(b, a % b);
}

const toFraction = function(number) {
  // create a variable to hold the numerator
  let numerator = 0;
  // create a variable to hold the denominator
  let denominator = 0;
  // create a variable to hold the result
  let result = '';
  // create a variable to hold the remainder
  let gcd = 0;
  // Write a function that takes a number as its argument
  // and returns a string that represents that number's simplified fraction.
  // if the number is a whole number
  if (number % 1 === 0) {
    // convert the number to a string
    result = number.toString();
    // return the string
    return result;
  }
  // if the number is a decimal
  if (number % 1 !== 0) {
    // convert the number to a string
    result = number.toString();
    // find the index of the decimal
    let decimalIndex = result.indexOf('.');
    // find the length of the number
    let numberLength = result.length;
    // find the number of digits after the decimal
    let digitsAfterDecimal = numberLength - decimalIndex - 1;
    // find the denominator by raising 10 to the power of the number of digits after the decimal
    denominator = Math.pow(10, digitsAfterDecimal);
    // find the numerator by multiplying the number by the denominator
    numerator = number * denominator;
    // find the greatest common divisor
    gcd = findGCD(numerator, denominator);
    // divide the numerator and denominator by the greatest common divisor
    numerator = numerator / gcd;
    denominator = denominator / gcd;
    // return the numerator and denominator as a string
    return numerator.toString() + '/' + denominator.toString();
  }
};


let res1 = toFraction(3.0)
let res2 = toFraction(2.5)
let res3 = toFraction(0.25)

console.log(res1)
console.log(res2)
console.log(res3)
