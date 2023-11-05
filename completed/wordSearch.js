// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// create the helper function
const helper = (board, word, i, j, index) => {
    // if the index is the length of the word, return true
    if (index === word.length) {
        return true;
    }
    // if the i is less than 0 or the i is greater than or equal to the length of the board or the j is less than 0 or the j is greater than or equal to the length of the board or the current letter is not the letter at the index of the word, return false
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[index]) {
        return false;
    }
    // set the current letter to a variable
    const current = board[i][j];
    // set the current letter to an empty string
    board[i][j] = '';
    // call the helper function with the board, word, i + 1, j, and index + 1
    const result = helper(board, word, i + 1, j, index + 1) ||
    // call the helper function with the board, word, i - 1, j, and index + 1
    helper(board, word, i - 1, j, index + 1) ||
    // call the helper function with the board, word, i, j + 1, and index + 1
    helper(board, word, i, j + 1, index + 1) ||
    // call the helper function with the board, word, i, j - 1, and index + 1
    helper(board, word, i, j - 1, index + 1);
    // set the current letter to the current letter
    board[i][j] = current;
    // return the result
    return result;
}

const exist = function(board, word) {
    // loop through the board
    for (let i = 0; i < board.length; i++) {
        // loop through the board
        for (let j = 0; j < board[i].length; j++) {
            // if the current letter is the first letter of the word
            if (board[i][j] === word[0]) {
                // call the helper function with the board, word, i, j, and 0
                if (helper(board, word, i, j, 0)) {
                    // return true
                    return true;
                }
            }
        }
    }
    // return false
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // false
