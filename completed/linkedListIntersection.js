/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // returns the node at which the intersection of two linked lists begins, or null if there is no such intersection.
  // create a hash table
  var hash = {};
  // iterate through list1
  var currentNode = list1;
  while (currentNode) {
    // add each node to hash
    hash[currentNode.value] = currentNode;
    // move to next node
    currentNode = currentNode.next;
  }
  // iterate through list2
  currentNode = list2;
  while (currentNode) {
    // if node is in hash
    if (hash[currentNode.value]) {
      // return node
      return currentNode;
    }
    // move to next node
    currentNode = currentNode.next;
  }
  // return null
  return null;
}


console.log(linkedListIntersection(Node('A'), Node('X'))); // null
console.log(linkedListIntersection(Node('A'), Node('A'))); // A
console.log(linkedListIntersection(Node('A'), Node('B'))); // null
console.log(linkedListIntersection(Node('A'), Node('B'))); // null
