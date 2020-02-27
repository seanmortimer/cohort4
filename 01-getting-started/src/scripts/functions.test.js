import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");
});

test('Does that isEven function work?', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(0)).toBe(true);
    expect(functions.isEven(5)).toBe(false);   
});

test('Does the add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does the subtract function work?', () => {
    expect(functions.subtract(1,2)).toBe(-1);
    expect(functions.subtract(202,101)).toBe(101);
    expect(functions.subtract(55,-45)).toBe(100);
    expect(functions.subtract(10,-8)).toBe(18);
    expect(functions.subtract(-10,-8)).toBe(-2);
});

test('Does the multiply function work?', () => {
    expect(functions.multiply(1,2)).toBe(2);
    expect(functions.multiply(202,101)).toBe(20402);
    expect(functions.multiply(55,-45)).toBe(-2475);
    expect(functions.multiply(10,-8)).toBe(-80);
    expect(functions.multiply(-10,-8)).toBe(80);
    expect(functions.multiply(20, 0)).toBe(0);
    expect(functions.multiply(0, 20)).toBe(0);
});

test('Does the multiply function work?', () => {
    expect(functions.divide(1,2)).toBe(0.5);
    
});
