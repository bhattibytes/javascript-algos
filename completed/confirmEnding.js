// The algorithm should check to see that the first argument, which should be a string, ends with the string provided as the second argument. Return a boolean

  
function confirmEnding(str, target) {
  // simply return if the character at the end is equal to the target
  // acount for upper lower cases 
  str = str.toLowerCase();
  target = target.toLowerCase();

  return str[str.length - 1] === target
}

let res = confirmEnding("Applepumpkin", "N"); // Should return either: true or false

console.log(res);