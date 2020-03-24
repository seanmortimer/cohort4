import functions from './functions.js'

test('Test card creation', () => {
    const card = functions.createCard('Test')
    expect(card).toBeTruthy();
    expect(card.nodeName).toBe('DIV');
    expect(card.className).toBe('clCard');
    expect(card.textContent).toContain('Test');
    // console.log('innerText', card.innerText);
    
    expect(card.innerHTML).toBe(
        'Test<button>After</button><button>Before</button><button>Delete</button>');
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