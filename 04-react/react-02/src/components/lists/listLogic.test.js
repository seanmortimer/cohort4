import LinkedList from './listLogic';


test('inserting first', () => {
  const list = new LinkedList();

  list.insertFirst('bats', 10);
  expect(list.size).toBe(1);
  expect(list.head).toEqual({ subject: 'bats', amount: 10, forwardNode: null });

  list.insertFirst('cats', 20);
  expect(list.size).toBe(2);
  expect(list.head).toEqual({
    subject: 'cats',
    amount: 20,
    forwardNode: { subject: 'bats', amount: 10, forwardNode: null },
  });

  // make sure non number amounts cause error
  expect(() => list.insertFirst('rats', 'mice')).toThrow();
  // console.log(list);
});

test('inserting to end', () => {
  const list = new LinkedList();

  list.insertLast('bats', 10);
  expect(list.size).toBe(1);
  expect(list.head).toEqual({ subject: 'bats', amount: 10, forwardNode: null });

  list.insertLast('cats', 20);
  expect(list.size).toBe(2);
  expect(list.head).toEqual({
    subject: 'bats',
    amount: 10,
    forwardNode: { subject: 'cats', amount: 20, forwardNode: null },
  });

  list.insertLast('kangaroo', 30);
  expect(list.size).toBe(3);
  expect(list.head).toEqual({
    subject: 'bats',
    amount: 10,
    forwardNode: {
      subject: 'cats',
      amount: 20,
      forwardNode: { subject: 'kangaroo', amount: 30, forwardNode: null },
    },
  });
});

test('inserting at index', () => {
  const list = new LinkedList();

  list.insertLast('bats', 10);
  list.insertLast('cats', 20);
  // list.insertLast('kangaroo', 30);

  // test error for invalid index
  expect(() => list.insert('koala', 30, 10)).toThrow('Insertion index is out of range');
  expect(() => list.insert('koala', 30, -10)).toThrow('Insertion index is out of range');

  list.insert('koala', 30, 0);
  expect(list.size).toBe(3);
  expect(list.head).toEqual({
    subject: 'koala',
    amount: 30,
    forwardNode: {
      subject: 'bats',
      amount: 10,
      forwardNode: { subject: 'cats', amount: 20, forwardNode: null },
    },
  });

  list.insert('kangaroo', 40, 2);
  expect(list.head.subject).toBe('koala');
  expect(list.head.forwardNode.subject).toBe('bats');
  expect(list.head.forwardNode.forwardNode.subject).toBe('kangaroo');
  expect(list.head.forwardNode.forwardNode.forwardNode.subject).toBe('cats');

  list.insert('panda', 50, 1);
  expect(list.size).toBe(5);
  expect(list.head.subject).toBe('koala');
  expect(list.head.forwardNode.subject).toBe('panda');
  expect(list.head.forwardNode.forwardNode.subject).toBe('bats');
  expect(list.head.forwardNode.forwardNode.forwardNode.subject).toBe('kangaroo');
  expect(list.head.forwardNode.forwardNode.forwardNode.forwardNode.subject).toBe('cats');

  list.insert('bear', 60, 4);
  expect(list.size).toBe(6);
  expect(list.head.subject).toBe('koala');
  expect(list.head.forwardNode.subject).toBe('panda');
  expect(list.head.forwardNode.forwardNode.subject).toBe('bats');
  expect(list.head.forwardNode.forwardNode.forwardNode.subject).toBe('kangaroo');
  expect(list.head.forwardNode.forwardNode.forwardNode.forwardNode.subject).toBe('bear');
  expect(list.head.forwardNode.forwardNode.forwardNode.forwardNode.forwardNode.subject).toBe('cats');

  expect(() => list.insert('tiger', 70, 6)).toThrow('Insertion index is out of range');
});


test('retrieving by index', () => {
  const list = new LinkedList();

  list.insertLast('bats', 10);
  list.insertLast('cats', 20);
  list.insertLast('kangaroo', 30);
  list.insertLast('koala', 40);

  expect(list.showAtIndex(0).show()).toEqual(['bats', 10]);
  expect(list.showAtIndex(0).forwardNode.subject).toBe('cats');
  expect(list.showAtIndex(1).subject).toBe('cats');
  expect(list.showAtIndex(1).amount).toBe(20);
  expect(list.showAtIndex(1).forwardNode.subject).toBe('kangaroo');


  list.insert('panda', 50, 1);
  expect(list.showAtIndex(1).show()).toEqual(['panda', 50]);
  expect(list.showAtIndex(2).show()).toEqual(['cats', 20]);
  expect(list.showAtIndex(3).show()).toEqual(['kangaroo', 30]);

  expect(() => list.showAtIndex(6)).toThrow('Search index is out of range');
});

test('deleting elements', () => {
  const list = new LinkedList();

  list.insertLast('bats', 10);
  list.insertLast('cats', 20);
  list.insertLast('kangaroo', 30);
  list.insertLast('koala', 40);
  list.insertLast('panda', 50);

  list.deleteAtIndex(0);
  expect(list.size).toBe(4);

  expect(list.showAtIndex(0).show()).toEqual(['cats', 20]);
  expect(list.showAtIndex(1).show()).toEqual(['kangaroo', 30]);
  expect(list.showAtIndex(2).show()).toEqual(['koala', 40]);
  expect(list.showAtIndex(3).show()).toEqual(['panda', 50]);

  list.deleteAtIndex(3);
  expect(list.size).toBe(3);
  expect(list.showAtIndex(0).show()).toEqual(['cats', 20]);
  expect(list.showAtIndex(1).show()).toEqual(['kangaroo', 30]);
  expect(list.showAtIndex(2).show()).toEqual(['koala', 40]);

  list.deleteAtIndex(1);
  expect(list.showAtIndex(0).show()).toEqual(['cats', 20]);
  expect(list.showAtIndex(1).show()).toEqual(['koala', 40]);

  expect(() => list.deleteAtIndex(6)).toThrow('Deletion index is out of range');
  expect(list.size).toBe(2);
});

test('totaling amounts', () => {
  const list = new LinkedList();

  list.insertLast('bats', 10);
  list.insertLast('cats', 20);
  list.insertLast('kangaroo', 30);

  expect(list.total()).toBe(60);

  list.insertLast('koala', 40);
  list.insertLast('panda', 50);

  expect(list.total()).toBe(150);
  list.deleteAtIndex(0);
  expect(list.total()).toBe(140);
});

test('inserting at index 0 on empty list', () => {
  const list = new LinkedList();

  list.insert('Bat', 10, 0);
  expect(list.size).toBe(1);
});
