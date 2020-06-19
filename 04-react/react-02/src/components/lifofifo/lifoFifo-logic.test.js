import { LifoList, FifoList } from './lifoFifo-logic';

test('adding and deleting - stack', () => {
  const lifo = new LifoList();

  lifo.addToStack('Ant', 10);
  expect(lifo.size).toBe(1);
  expect(lifo.head.show()).toEqual(['Ant', 10]);
  expect(lifo.currentNode.show()).toEqual(['Ant', 10]);

  lifo.addToStack('Bat', 20);
  expect(lifo.size).toBe(2);
  expect(lifo.head.show()).toEqual(['Ant', 10]);
  expect(lifo.tail.show()).toEqual(['Bat', 20]);

  lifo.addToStack('Cat', 30);
  expect(lifo.size).toBe(3);
  expect(lifo.head.show()).toEqual(['Ant', 10]);
  expect(lifo.head.forwardNode.show()).toEqual(['Bat', 20]);
  expect(lifo.head.forwardNode.forwardNode.show()).toEqual(['Cat', 30]);
  expect(lifo.tail.show()).toEqual(['Cat', 30]);

  lifo.deleteFromStack();
  expect(lifo.size).toBe(2);
  expect(lifo.head.show()).toEqual(['Ant', 10]);
  expect(lifo.tail.show()).toEqual(['Bat', 20]);

  lifo.deleteFromStack();
  expect(lifo.size).toBe(1);
  expect(lifo.head.show()).toEqual(['Ant', 10]);
  expect(lifo.currentNode.show()).toEqual(['Ant', 10]);
  expect(lifo.tail.show()).toEqual(['Ant', 10]);

  lifo.deleteFromStack();
  expect(lifo.size).toBe(0);
  expect(lifo.head).toBeNull();
  expect(lifo.tail).toBeNull();

  lifo.deleteFromStack();
  expect(lifo.size).toBe(0);
  expect(lifo.head).toBeNull();
  expect(lifo.tail).toBeNull();
});

test('adding and deleting - queue', () => {
  const fifo = new FifoList();

  fifo.enqueue('Ant', 10);
  expect(fifo.size).toBe(1);
  expect(fifo.head.show()).toEqual(['Ant', 10]);
  expect(fifo.tail.show()).toEqual(['Ant', 10]);
  expect(fifo.currentNode.show()).toEqual(['Ant', 10]);

  fifo.enqueue('Bat', 20);
  expect(fifo.size).toBe(2);
  expect(fifo.head.show()).toEqual(['Ant', 10]);
  expect(fifo.tail.show()).toEqual(['Bat', 20]);

  fifo.enqueue('Cat', 30);
  expect(fifo.size).toBe(3);
  expect(fifo.head.show()).toEqual(['Ant', 10]);
  expect(fifo.head.forwardNode.show()).toEqual(['Bat', 20]);
  expect(fifo.head.forwardNode.forwardNode.show()).toEqual(['Cat', 30]);
  expect(fifo.tail.show()).toEqual(['Cat', 30]);

  fifo.dequeue();
  expect(fifo.size).toBe(2);
  expect(fifo.head.show()).toEqual(['Bat', 20]);
  expect(fifo.tail.show()).toEqual(['Cat', 30]);
  expect(fifo.tail.forwardNode).toBeNull();

  fifo.dequeue();
  expect(fifo.size).toBe(1);
  expect(fifo.head.show()).toEqual(['Cat', 30]);
  expect(fifo.tail.show()).toEqual(['Cat', 30]);

  fifo.dequeue();
  expect(fifo.size).toBe(0);
  expect(fifo.head).toBeNull();
  expect(fifo.tail).toBeNull();

  fifo.dequeue();
  expect(fifo.size).toBe(0);
  expect(fifo.head).toBeNull();
  expect(fifo.tail).toBeNull();
});
