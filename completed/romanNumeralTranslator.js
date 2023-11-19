
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') return null;
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const current = DIGIT_VALUES[romanNumeral[i]];
    const next = DIGIT_VALUES[romanNumeral[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;

};

console.log(translateRomanNumeral('LX')); // 60
console.log(translateRomanNumeral('IV')); // 4
console.log(translateRomanNumeral('XIV')); // 14
console.log(translateRomanNumeral('XV')); // 15
console.log(translateRomanNumeral('XVI')); // 16