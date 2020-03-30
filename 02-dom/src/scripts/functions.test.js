import functions from './functions.js'

test('Test list item creation', () => {
    const item = functions.createListItem('Test');
    expect(item.nodeName).toBe('LI');
    expect(item.textContent).toContain('Test');
    expect(item.childNodes[0].textContent).toBe('Test');
    expect(item.childNodes[1].textContent).toBe('Delete');
    expect(item.childNodes[1].nodeName).toBe('BUTTON');
    expect(item.firstChild.textContent).toBe('Test');
    
});

test('Test card creation', () => {
    const card = functions.createCard('Test')
    expect(card).toBeTruthy();
    expect(card.nodeName).toBe('DIV');
    expect(card.className).toBe('clCard');
    expect(card.textContent).toContain('Test');
    expect(card.textContent).toBe('TestInsert afterInsert beforeDelete card');
})

test('Test Adding Before Card', () => {
    // Test setup -> create a div and attach a card to it
    const group = document.createElement('div');
    const element = functions.createCard('Test card');
    group.appendChild(element);
    expect(group.children.length).toBe(1); // Make sure setup worked
    expect(group.children[0].textContent.substr(0, 9)).toBe('Test card');


    const text = 'New Element';
    functions.addBeforeCard(element, text);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 11)).toBe(text);
    expect(group.children[1].textContent.substr(0, 9)).toBe('Test card');

});

test('Test Adding Before Card', () => {
    // Test setup -> create a div and attach a card to it
    const group = document.createElement('div');
    const element = functions.createCard('Test card');
    group.appendChild(element);
    expect(group.children.length).toBe(1); // Make sure setup worked
    expect(group.children[0].textContent.substr(0, 9)).toBe('Test card');


    const text = 'New Element';
    functions.addAfterCard(element, text);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 9)).toBe('Test card');
    expect(group.children[1].textContent.substr(0, 11)).toBe(text);

});

test('Test deleting cards', () => {
    const group = document.createElement('div');
    const element = functions.createCard('First insert');
    const element2 = functions.createCard('Second insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);
    group.appendChild(element2);
    expect(group.children.length).toBe(2);

    functions.deleteCard(element);
    expect(group.children.length).toBe(1);
    functions.deleteCard(element2);
    expect(group.children.length).toBe(0);
});
