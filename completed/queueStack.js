/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  // add an item to the top of the stack
  this.push = function(item) {
    this[this.size()] = item;
    return item;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    var item = this[this.size() - 1];
    delete this[this.size() - 1];
    return item;
  };

  // return the number of items in the stack
  this.size = function() {
    return Object.keys(this).length;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(item) {
    inbox.push(item);
    return item;
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    var item;
    while (inbox.size() > 0) {
      outbox.push(inbox.pop());
    }
    item = outbox.pop();
    while (outbox.size() > 0) {
      inbox.push(outbox.pop());
    }
    return item;
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size();
  };
};

var result = new Queue();

result.enqueue('a');
result.enqueue('b');
result.enqueue('c');
result.enqueue('d');
console.log(result); // { '0': 'b', '1': 'c', '2': 'd' }