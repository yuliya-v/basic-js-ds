const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = class Queue {

  constructor() {
    this.top = null;
    this.length = 0;
  }
  
  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.top = new ListNode(value);
    } else {
      let currentPos = this.top;
      while (currentPos.next) {
        currentPos = currentPos.next;
      }
      currentPos.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {

    if (this.length > 0) {
      let a = this.top.value;
      this.top = this.top.next;
      this.length--;
      return a;
    }
    return;
  }

}


