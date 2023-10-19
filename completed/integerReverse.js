/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // create a variable to store the reversed number starting at 0 
  let reversed = 0;
  // while the number is greater than 0
  while ( number > 0 ) {
    // multiply the reversed number by 10 and add the remainder of the number divided by 10
    reversed = reversed * 10 + number % 10;
    // divide the number by 10 and round down
    number = Math.floor( number / 10 )
  }
  // return the reversed number
  return reversed
}

let res = reverseInteger(12345) 
console.log(res) // 54321
