// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.
 

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    // create a result array
    const result = [];
    // create a helper function to recurse through the numbers
    const helper = (current, start) => {
        // if the current array is the length of k, push it into the result array
        if (current.length === k) {
            result.push(current);
            return;
        }
        // loop through the numbers from start to n
        for (let i = start; i <= n; i++) {
            // call the helper function with the current array plus the current number and the next number as the start
            helper([...current, i], i + 1);
        }
    }
    // call the helper function with an empty array and 1 as the start
    helper([], 1);
    // return the result array
    return result;
};

console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
console.log(combine(5, 3)); // [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]
console.log(combine(3, 2)); // [[1,2],[1,3],[2,3]]
console.log(combine(3, 1)); // [[1],[2],[3]]
