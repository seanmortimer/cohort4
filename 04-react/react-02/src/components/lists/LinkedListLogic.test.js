import LinkedList from './LinkedListLogic';

test('inserting new head', () => {
  const list = new LinkedList();

  list.insertAtHead('Ant', 10);
  expect(list.size).toBe(1);
  expect(list.head).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.tail).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.currentNode).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });

  list.insertAtHead('Bat', 20);
  expect(list.size).toBe(2);
  expect(list.head.show()).toEqual(['Bat', 20]);
  expect(list.head.forwardNode.show()).toEqual(['Ant', 10]);
  expect(list.tail).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.currentNode).toEqual(list.head);

  list.insertAtHead('Cat', 30);
  expect(list.size).toBe(3);
  expect(list.head.show()).toEqual(['Cat', 30]);
  expect(list.head.forwardNode.show()).toEqual(['Bat', 20]);
  expect(list.tail).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.currentNode).toEqual(list.head);

  // make sure non number amounts thorw error
  expect(() => list.insertAtHead('Dog', 'Elephant')).toThrow();
  expect(() => list.insertAtHead('Dog', '40')).not.toThrow();
  expect(() => list.insertAtHead('Dog', 40.55)).not.toThrow();
});

test('inserting to tail', () => {
  const list = new LinkedList();

  list.insertAtTail('Ant', 10);
  expect(list.size).toBe(1);
  expect(list.head).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.tail).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });
  expect(list.currentNode).toEqual({ subject: 'Ant', amount: 10, forwardNode: null });

  list.insertAtTail('Bat', 20);
  expect(list.size).toBe(2);
  expect(list.head.show()).toEqual(['Ant', 10]);
  expect(list.head.forwardNode.show()).toEqual(['Bat', 20]);
  expect(list.tail).toEqual({ subject: 'Bat', amount: 20, forwardNode: null });

  list.insertAtTail('Cat', 30);
  expect(list.size).toBe(3);
  expect(list.head.show()).toEqual(['Ant', 10]);
  expect(list.head.forwardNode.show()).toEqual(['Bat', 20]);
  expect(list.head.forwardNode.forwardNode.show()).toEqual(['Cat', 30]);
  expect(list.head.forwardNode.forwardNode.forwardNode).toBeNull();
  expect(list.tail).toEqual({ subject: 'Cat', amount: 30, forwardNode: null });
});

test('jump to head / tail', () => {
  const list = new LinkedList();

  list.insertAtTail('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);
  list.insertAtTail('Dog', 40);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);

  list.jumpToHead();
  expect(list.currentNode.show()).toEqual(['Ant', 10]);

  list.jumpToTail();
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
});

test('stepping through list', () => {
  const list = new LinkedList();

  list.insertAtTail('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);
  list.insertAtTail('Dog', 40);
  expect(list.size).toBe(4);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);

  list.stepBackward();
  expect(list.currentNode.show()).toEqual(['Cat', 30]);
  list.stepBackward();
  expect(list.currentNode.show()).toEqual(['Bat', 20]);
  list.stepBackward();
  expect(list.currentNode.show()).toEqual(['Ant', 10]);
  list.stepBackward();
  expect(list.currentNode.show()).toEqual(['Ant', 10]);
  list.stepForward();
  expect(list.currentNode.show()).toEqual(['Bat', 20]);
  list.stepForward();
  expect(list.currentNode.show()).toEqual(['Cat', 30]);
  list.stepForward();
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  list.stepForward();
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
});

test('inserting after current node - head', () => {
  const list = new LinkedList();

  list.insertAfterCurrent('Ant', 10);
  expect(list.currentNode.show()).toEqual(['Ant', 10]);
  expect(list.head.show()).toEqual(['Ant', 10]);
  expect(list.tail.show()).toEqual(['Ant', 10]);

  list.insertAfterCurrent('Bat', 20);
  list.insertAfterCurrent('Cat', 30);
  expect(list.size).toBe(3);
  expect(list.currentNode.show()).toEqual(['Cat', 30]);
  list.jumpToHead();
  expect(list.currentNode.show()).toEqual(['Ant', 10]);

  list.insertAfterCurrent('Dog', 40);
  expect(list.size).toBe(4);
  expect(list.head.show()).toEqual(['Ant', 10]);
  expect(list.head.forwardNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.forwardNode.show()).toEqual(['Bat', 20]);
  expect(list.tail.forwardNode).toBeNull();
});

test('inserting after current node - middle', () => {
  const list = new LinkedList();

  list.insertAtTail('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);
  expect(list.size).toBe(3);
  list.stepBackward();
  expect(list.currentNode.show()).toEqual(['Bat', 20]);

  list.insertAfterCurrent('Dog', 40);
  expect(list.size).toBe(4);
  expect(list.head.show()).toEqual(['Ant', 10]);
  expect(list.head.forwardNode.forwardNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.forwardNode.show()).toEqual(['Cat', 30]);

  list.insertAfterCurrent('Elephant', 50);
  expect(list.size).toBe(5);
  expect(list.currentNode.show()).toEqual(['Elephant', 50]);
  expect(list.currentNode.forwardNode.show()).toEqual(['Cat', 30]);
});

test('inserting after current node - tail', () => {
  const list = new LinkedList();

  list.insertAtTail('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);
  expect(list.size).toBe(3);
  expect(list.currentNode.show()).toEqual(['Cat', 30]);

  list.insertAfterCurrent('Dog', 40);
  expect(list.head.forwardNode.forwardNode.show()).toEqual(['Cat', 30]);
  expect(list.head.forwardNode.forwardNode.forwardNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.forwardNode).toBeNull();
  expect(list.tail.show()).toEqual(['Dog', 40]);
});


test('deleting elements', () => {
  const list = new LinkedList();

  list.insertAtHead('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);
  list.insertAtTail('Dog', 40);
  list.insertAtTail('Elephant', 50);
  expect(list.size).toBe(5);
  list.jumpToHead();
  expect(list.currentNode.show()).toEqual(['Ant', 10]);

  // delete head
  list.deleteCurrent();
  expect(list.size).toBe(4);
  expect(list.currentNode.show()).toEqual(['Bat', 20]);
  expect(list.head.show()).toEqual(['Bat', 20]);
  expect(list.head.forwardNode.show()).toEqual(['Cat', 30]);

  // delete from middle
  list.jumpToHead();
  list.stepForward();
  expect(list.currentNode.show()).toEqual(['Cat', 30]);

  list.deleteCurrent();
  expect(list.size).toBe(3);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.forwardNode.show()).toEqual(['Elephant', 50]);
  expect(list.head.show()).toEqual(['Bat', 20]);
  expect(list.head.forwardNode.show()).toEqual(['Dog', 40]);

  // delete from tail
  list.jumpToTail();
  expect(list.currentNode.show()).toEqual(['Elephant', 50]);

  list.deleteCurrent();
  expect(list.size).toBe(2);
  expect(list.currentNode.show()).toEqual(['Dog', 40]);
  expect(list.currentNode.forwardNode).toBeNull();
  expect(list.head.forwardNode.show()).toEqual(['Dog', 40]);
  expect(list.tail.show()).toEqual(['Dog', 40]);

  // delete down to zero
  list.deleteCurrent();
  expect(list.size).toBe(1);
  list.deleteCurrent();
  expect(list.size).toBe(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
});

test('totaling amounts', () => {
  const list = new LinkedList();

  expect(list.total()).toBe(0);
  list.insertAtTail('Ant', 10);
  list.insertAtTail('Bat', 20);
  list.insertAtTail('Cat', 30);

  expect(list.total()).toBe(60);

  list.insertAtTail('Dog', 40);
  expect(list.total()).toBe(100);

  list.jumpToHead();
  list.deleteCurrent();
  expect(list.total()).toBe(90);
});
