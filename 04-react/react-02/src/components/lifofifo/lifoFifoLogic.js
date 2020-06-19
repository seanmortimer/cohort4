/* eslint-disable max-classes-per-file */
import LinkedList from '../linkedLists/linkedListLogic';

class LifoList extends LinkedList {
  addToStack(subject, amount) {
    this.insertAtTail(subject, amount);
  }

  deleteFromStack() {
    if (!this.size) return;
    this.jumpToTail();
    this.deleteCurrent();
  }
}

class FifoList extends LinkedList {
  enqueue(subject, amount) {
    this.insertAtTail(subject, amount);
  }

  dequeue() {
    if (!this.size) return;
    this.jumpToHead();
    this.deleteCurrent();
  }
}

export { LifoList, FifoList };
