/* eslint-disable max-classes-per-file */
import LinkedList from './LinkedListLogic';

class Lifo extends LinkedList {
  addToStack(subject, amount) {
    this.insertAtHead(subject, amount);
  }

  deleteFromStack() {
    if (!this.size) return;
    this.jumpToHead();
    this.deleteCurrent();
  }
}

class Fifo extends LinkedList {
  enqueue(subject, amount) {
    this.insertAtTail(subject, amount);
  }

  dequeue() {
    if (!this.size) return;
    this.jumpToHead();
    this.deleteCurrent();
  }
}

export { Lifo, Fifo };
