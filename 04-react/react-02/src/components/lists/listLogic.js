/* eslint-disable max-classes-per-file */
class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject;

    // Try if (Number(amount).isNaN) Throw
    if (!isNaN(amount)) {
      this.amount = Number(amount);
    } else {
      throw new TypeError();
    }
    this.forwardNode = forwardNode;
  }

  show() {
    return [this.subject, this.amount];
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    // this.currentNode = null;
  }

  insertFirst(subject, amount) {
    this.head = new ListNode(subject, amount, this.head);
    this.size++;
  }

  insertLast(subject, amount) {
    const node = new ListNode(subject, amount);
    let currentNode = null;

    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.forwardNode) {
        currentNode = currentNode.forwardNode;
      }
      currentNode.forwardNode = node;
    }

    this.size++;
  }

  insert(subject, amount, index) {
    // console.log(this.size, index);
    if (index === 0) {
      this.head = new ListNode(subject, amount, this.head);
      this.size++;
      return;
    }

    if (index < 0 || index >= this.size) throw new Error('Insertion index is out of range');

    const node = new ListNode(subject, amount);
    let currentNode; let
      previousNode = null;
    currentNode = this.head;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.forwardNode;
    }

    node.forwardNode = currentNode;
    previousNode.forwardNode = node;
    this.size++;
  }

  showAtIndex(index) {
    if (index < 0 || index >= this.size) throw new Error('Search index is out of range');
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === index) return currentNode;
      count++;
      currentNode = currentNode.forwardNode;
    }
    return currentNode;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) throw new Error('Deletion index is out of range');
    let currentNode = this.head;
    let previousNode = null;

    if (index === 0) {
      this.head = currentNode.forwardNode;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.forwardNode;
      }
      previousNode.forwardNode = currentNode.forwardNode;
    }
    this.size--;
  }

  total() {
    let currentNode = this.head;
    let sum = null;

    while (currentNode) {
      sum += currentNode.amount;
      currentNode = currentNode.forwardNode;
      // console.log('currentNode :>> ', currentNode);
    }
    return sum;
  }
}


export default LinkedList;
