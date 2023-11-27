/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  var rows = board.split('\n');
  var columns = [];
  var subgrids = [];
  var subgridIndex = 0;
  var subgridRow = 0;
  var subgridColumn = 0;
  var subgridIndex = 0;
  var subgridRow = 0;
  var subgridColumn = 0;

  for (var i = 0; i < rows.length; i++) {
    columns.push('');
    subgrids.push('');
  }
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      columns[j] += rows[i][j];
      subgridRow = Math.floor(i / 3);
      subgridColumn = Math.floor(j / 3);
      subgridIndex = subgridRow * 3 + subgridColumn;
      subgrids[subgridIndex] += rows[i][j];
    }
  }
  for (var i = 0; i < rows.length; i++) {
    if (!isValid(rows[i])) {
      return 'invalid';
    }
    if (!isValid(columns[i])) {
      return 'invalid';
    }
    if (!isValid(subgrids[i])) {
      return 'invalid';
    }
  }
  return 'solved';

  function isValid(string) {
    var digits = {};
    for (var i = 0; i < string.length; i++) {
      if (string[i] === '\n') {
        continue;
      }
      if (digits[string[i]]) {
        return false;
      } else {
        digits[string[i]] = true;
      }
    }
    return true;
  }
}

var board = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
console.log(sudokuChecker(board));
console.log(sudokuChecker(board) === 'solved');