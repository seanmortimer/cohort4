/* eslint-disable max-classes-per-file */
class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject;

    // Try if (Number(amount).isNaN) Throw
    // if (!isNaN(amount)) {
    // console.log('Number(amount) :>> ', amount, Number.isNaN(Number(amount)));

    // make sure amount is a number
    if (Number.isNaN(Number(amount))) throw new TypeError();
    else this.amount = Number(amount);
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
    this.currentNode = null;
    this.size = 0;
  }

  insertAtHead(subject, amount) {
    this.head = new ListNode(subject, amount, this.head);
    if (this.size === 0) this.tail = this.head;
    this.currentNode = this.head;
    this.size++;
  }

  insertAtTail(subject, amount) {
    const node = new ListNode(subject, amount, null);

    if (this.size === 0) this.insertAtHead(subject, amount);
    else {
      const oldTail = this.tail;
      this.tail = node;
      oldTail.forwardNode = this.tail;
      this.currentNode = this.tail;
      this.size++;
    }
  }

  insertAfterCurrent(subject, amount) {
    const node = new ListNode(
      subject,
      amount,
      this.currentNode ? this.currentNode.forwardNode : null,
    );
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.currentNode = node;
    } else {
      this.currentNode.forwardNode = node;
      this.currentNode = node;
      if (!node.forwardNode) this.tail = node;
    }
    this.size++;
  }

  jumpToHead() {
    this.currentNode = this.head;
  }

  jumpToTail() {
    this.currentNode = this.tail;
  }

  stepForward() {
    if (this.currentNode.forwardNode) this.currentNode = this.currentNode.forwardNode;
  }

  stepBackward() {
    if (this.currentNode === this.head) return;
    // const oldCurrent = this.currentNode;
    let node = this.head;
    while (node.forwardNode) {
      if (node.forwardNode === this.currentNode) {
        this.currentNode = node;
        break;
      }
      node = node.forwardNode;
    }
    // throw new Error('I don\'t know what happened, but stepping backwards broke!');
  }

  deleteCurrent() {
    if (this.head === this.currentNode) {
      this.head = this.head.forwardNode;
      this.currentNode = this.head;
    } else {
      let node = this.head;
      while (node.forwardNode) {
        if (node.forwardNode === this.currentNode) {
          node.forwardNode = this.currentNode.forwardNode;
          if (!node.forwardNode) {
            this.tail = node;
            this.currentNode = this.tail;
          } else this.currentNode = node.forwardNode;
          break;
        }
        node = node.forwardNode;
      }
    }
    this.size--;
    if (!this.size) this.tail = null;
  }

  total() {
    let currentNode = this.head;
    let sum = 0;

    while (currentNode) {
      sum += currentNode.amount;
      currentNode = currentNode.forwardNode;
      // console.log('currentNode :>> ', currentNode);
    }
    return sum;
  }
}


export default LinkedList;
