/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // create a variable to hold the count of true values
  let trueCount = 0;
  // ensure the input array is unique
  arr = new Set(arr);
  // convert the set back to an array
  arr = Array.from(arr);
  // ensure the this array is unique
  let thisSet = new Set(this);
  // convert the set back to an array
  thisSet = Array.from(thisSet);
  // loop over the input array 
  for (let i = 0; i < arr.length; i++) {
  // check to see if the arr contains objects or arrays as inner elements
    if (typeof arr[i] === 'object') {
      // if so, loop over the inner elements
      for (let j = 0; j < arr[i].length; j++) {
        // check to see if the inner elements are equal to the current element
        if (arr[i][j] === thisSet[i]) {
          // if so, increase the true count by 1 
          trueCount++;
        }
      }
    // otherwise if the inner elements are not objects or arrays
    } else {
      // loop over the thisSet array
      for (let k = 0; k < thisSet.length; k++) {
        // check to see if the current element is equal to the current element in the thisSet array
        if (arr[i] === thisSet[k]) {
          // if so, increase the true count by 1
          trueCount++;
        }
      }
    }
  }
  // check to see if the true count is equal to the length of the thisSet array
  if ( trueCount === thisSet.length ) {
    // if so, return true
    return true;
  } else {
    // otherwise, return false
    return false;
  }
};

let a = ['commit','push']
let res = a.isSubsetOf(['commit','rebase','push','blame']) // true
console.log(res);

let b = ['merge','reset','reset']
let res2 = b.isSubsetOf(['reset','merge','add','commit']) // true 
console.log(res2);