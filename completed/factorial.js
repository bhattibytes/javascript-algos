// in mathematics, the factorial of a number is the product (i.e. the multiplication) of all of the integers leading up to that number, starting from 1. A factorial is written as an exclamation point !. So to calculate 5! you simply multiply 5 x 4 x 3 x 2 x 1. That equates to 120. Easy right? The factorial of 0! or 1! always results as 1 by convention.

const factorial = function(num) {
  // create a variable to store the final result starting at 1
  let factorial = 1; 
  // edge cases if num is 1 or 0 return 1 
  if (num <= 1) {
    return factorial; 
  }
	// loop starting at num decreasing by 1 and ending at 1
  for ( let i = num; i >= 1; i-- ) {
    // reassign factorial to be it times i which starts at num and decreases to 1 
    factorial *= i
  }
  return factorial;
}

let res = factorial(4); // Should return 24
console.log(res)