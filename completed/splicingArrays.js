// Write an algorithm that uses splice

function splicer(arr1, arr2, n) {
  // splice arr2 at n delete 0 and spread out arr1 at the index n
  arr2.splice(n, 0, ...arr1);
  // return arr2 
  return arr2;
}

let res = splicer([1, 2, 3], ['a', 'b', 'c'], 2); // Should return: ["a", "b", 1, 2, 3, "c"] 
console.log(res)

