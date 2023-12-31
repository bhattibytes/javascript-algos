/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // return true if n is prime, false otherwise
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  var sqrt = Math.sqrt(n);
  for (var i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true; 
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  // return an array of all prime numbers between start and end (inclusive)
  var primes = [];
  for (var i = start; i <= end; i++) {
    if (primeTester(i)) {
      primes.push(i);
    }
  }
  return primes;

};

console.log(primeSieve(1, 100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ...]
console.log(primeSieve(1, 10)); // [2, 3, 5, 7]
console.log(primeSieve(5, 5)); // [5]
console.log(primeSieve(5, 6)); // [5]


