/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

const makeChange = function(total) {
  // create a variable to hold the number of ways to make change
  let ways = 0;
  // create a function to recurse through the different ways to make change
  let recurse = function(remaining, coins) {
    // base case: if the remaining amount is 0, increment the ways variable
    if (remaining === 0) {
      ways++;
    }
    // recursive case: if the remaining amount is greater than 0, iterate through the coins
    if (remaining > 0) {
      for (let i = 0; i < coins.length; i++) {
        // call the recurse function with the remaining amount minus the current coin and the coins array
        recurse(remaining - coins[i], coins.slice(i));
      }
    }
  };
  // call the recurse function with the total amount and the coins array
  recurse(total, [1, 2, 5, 10, 20, 50, 100, 200]);
  // return the ways variable
  return ways;
};

console.log(makeChange(1)); // 1
console.log(makeChange(2)); // 2
console.log(makeChange(3)); // 2
console.log(makeChange(4)); // 3
console.log(makeChange(5)); // 4
console.log(makeChange(6)); // 5
