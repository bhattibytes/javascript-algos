/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */


// create a merge function that takes in two arrays
const merge = function(left, right) {
  // create a results array
  let results = [];
  // create a left pointer and a right pointer
  let leftPointer = 0;
  let rightPointer = 0;
  // while the left pointer is less than the length of the left array and the right pointer is less than the length of the right array
  while(leftPointer < left.length && rightPointer < right.length) {
    // if the element at the left pointer is less than the element at the right pointer
    if(left[leftPointer] < right[rightPointer]) {
      // push the element at the left pointer into the results array
      results.push(left[leftPointer]);
      // increment the left pointer
      leftPointer++;
    } else {
      // otherwise push the element at the right pointer into the results array
      results.push(right[rightPointer]);
      // increment the right pointer
      rightPointer++;
    }
  }
  // while the left pointer is less than the length of the left array
  while(leftPointer < left.length) {
    // push the element at the left pointer into the results array
    results.push(left[leftPointer]);
    // increment the left pointer
    leftPointer++;
  }

  // while the right pointer is less than the length of the right array
  while(rightPointer < right.length) {
    // push the element at the right pointer into the results array
    results.push(right[rightPointer]);
    // increment the right pointer
    rightPointer++;
  }
  // return the results array
  return results;
};


const mergeSort = function(array) {
  // edge case: if the array is empty or only has one element, return the array
  if(array.length <= 1) return array;
  // create a mid point variable by splitting the array in half
  let mid = Math.floor(array.length/2);
  // recrusively call the mergeSort function on the left and right halves of the array
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));
  // return the merge function on the left and right halves of the array
  return merge(left, right);
};


console.log(mergeSort([4,7,4,3,9,1,2])); // [1,2,3,4,4,7,9]
console.log(mergeSort([4,7,4,3,9,1,2,5])); // [1,2,3,4,4,5,7,9]
console.log(mergeSort([4,7,4,3,9,1,2,5,6])); // [1,2,3,4,4,5,6,7,9]
console.log(mergeSort([4,7,4,3,9,1,2,5,6,8])); // [1,2,3,4,4,5,6,7,8,9]
