import functions from './functions.js'

test('Test card creation', () => {
    const card = functions.createCard('Test')
    expect(card).toBeTruthy();
    expect(card.nodeName).toBe('DIV');
    expect(card.className).toBe('clCard');
    console.log('card innerHTml:', card.innerHTML);
    console.log('card:', card);
    
    expect(card).toContain('Test');
    expect(card.innerHTML).toBe(
        'Test<button>After</button><button>Before</button><button>Delete</button>');
    
})