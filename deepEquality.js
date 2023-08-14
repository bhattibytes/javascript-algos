/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

var deepEquals = function(apple, orange) {
  // consider the following edge cases:
  // first check if apple is the object orange
    if (apple === orange) {
    return true;
  }
  // if apple is null or undefined or a primitive, return false
  if (apple && !orange || !apple && orange) {
    return false;
  }
  // if apple is not an object OR orange is not an object, return false
  if (!(apple instanceof Object) || !(orange instanceof Object)) {
    return false;
  }
  
  // get all the keys of both apple and orange
  var appleKeys = Object.keys(apple);
  var orangeKeys = Object.keys(orange);
  
  // check if the lengths of the above two array are not equal which means they 
  // dont have the same number of keys in each 
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }
  // loop over the keys in apple 
  for (var i = 0; i < appleKeys.length; i++) {
    // recursively call deepEquals to check each nested object
    if (!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) {
      return false;
    }
  }

  return true;
}


let result1 = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
let result2 = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false

console.log('Should be TRUE', result1);
console.log('Should be FALSE', result2);