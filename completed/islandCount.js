/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // Your code here.
  const mapArr = mapStr.split('\n');
  const map = mapArr.map(row => row.split(''));
  let count = 0;
  const visited = new Set();

  function traverse(row, col) {
    const rowInBounds = 0 <= row && row < map.length;
    const colInBounds = 0 <= col && col < map[0].length;
    if (!rowInBounds || !colInBounds) return;
    if (map[row][col] === '.') return;
    const pos = row + ',' + col;
    if (visited.has(pos)) return;
    visited.add(pos);
    traverse(row + 1, col);
    traverse(row - 1, col);
    traverse(row, col + 1);
    traverse(row, col - 1);
  }

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      const pos = row + ',' + col;
      if (map[row][col] === '0' && !visited.has(pos)) {
        count++;
        traverse(row, col);
      }
    }
  }

  return count;
}

console.log(countIslands('.0...\n.00..\n....0')); // should print 2
console.log(countIslands('..000.\n..000.\n..000.\n.0....\n..000.')); // should print 3
console.log(countIslands('..000.\n..0...\n..0.0.\n..0...\n..000.')); // should print 2
console.log(countIslands('0....0\n......\n..00..\n......\n0....0')); // should print 5
