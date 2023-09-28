// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 5
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step  + 1 step + 2 steps
// 3. 2 steps + 2 steps
// 4. 1 step + 2 steps + 1 step
// 5. 2 steps + 1 step + 1 step

// Input: n = 5
// Output: 8
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step  + 1 step + 1 step + 2 steps
// 3. 1 step + 2 steps + 2 steps
// 4. 2 steps + 2 steps + 1 step
// 5. 1 step + 2 steps + 1 step + 1 step
// 6. 2 steps + 1 step + 1 step + 1 step
// 7. 1 step + 1 step + 2 steps + 1 step
// 8. 2 steps + 1 step + 2 steps


// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  // base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  // recursive case
  return climbStairs(n-1) + climbStairs(n-2);
};

console.log("Should be 2", climbStairs(2));
console.log("Should be 3", climbStairs(3));
console.log("Should be 5", climbStairs(4));
console.log("Should be 8", climbStairs(5));
console.log("Should be 21", climbStairs(7));
console.log("Should be 2584", climbStairs(17));