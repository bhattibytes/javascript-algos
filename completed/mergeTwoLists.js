// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
// account for edge cases where one or both arrays are empty
list1.length === 0 ? list2 : list2.length === 0 ? list1 : []; 
  // create a varaible to store new merged list   
  let mergedList = [];
  let i = 0;
  let j = 0;
  // iterate through both arrays
  while (i < list1.length && j < list2.length) {
    // compare the first element of each array
    if (list1[i] < list2[j]) {
      // push the smaller element into the new array
      mergedList.push(list1[i]);
      // increment the index of the array that had the smaller element
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }
 // continue until both arrays are empty
  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }
  // return the new array
  return mergedList;
};

console.log('[1,1,2,3,4,4]:  ',mergeTwoLists([1,2,4], [1,3,4])); // [1,1,2,3,4,4] 
console.log('[0]:  ',mergeTwoLists([], [0])); // [0]
console.log('[]:  ',mergeTwoLists([], []));  // []
console.log('[1,1,2,3,3,4,4,5,6,7,8,10]:  ',mergeTwoLists([1,2,3,4,5,6,7,8,10], [1,3,4])); // [1,1,2,3,3,4,4,5,6,7,8,10]