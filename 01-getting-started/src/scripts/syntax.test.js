import syntaxFunctions from './syntax'


test('Does the number function work?', () => {
    expect(syntaxFunctions.isNumber(1)).toBe(true);
    expect(syntaxFunctions.isNumber('dog')).toBe(false);
    expect(syntaxFunctions.isNumber(true)).toBe(false);
    expect(syntaxFunctions.isNumber([0,1,2])).toBe(false);
    expect(syntaxFunctions.isNumber({'user': 'name', 'pass': 'word'})).toBe(false);
    expect(syntaxFunctions.isNumber(undefined)).toBe(false);
});

test('Does the string function work?', () => {
    expect(syntaxFunctions.isString(0)).toBe(false);  
    expect(syntaxFunctions.isString('dog')).toBe(true);
    expect(syntaxFunctions.isString(true)).toBe(false);
    expect(syntaxFunctions.isString([0,1,2])).toBe(false);
    expect(syntaxFunctions.isString({'user': 'name', 'pass': 'word'})).toBe(false);
    expect(syntaxFunctions.isString(undefined)).toBe(false);
});

test('Does the boolean function work?', () => {
    expect(syntaxFunctions.isBoolean(true)).toBe(true);
    expect(syntaxFunctions.isBoolean(0)).toBe(false);  
    expect(syntaxFunctions.isBoolean('dog')).toBe(false);
    expect(syntaxFunctions.isBoolean([0,1,2])).toBe(false);
    expect(syntaxFunctions.isBoolean({'user': 'name', 'pass': 'word'})).toBe(false);
    expect(syntaxFunctions.isBoolean(undefined)).toBe(false);
});

test('Does the array function work?', () => {
    expect(syntaxFunctions.array([1,2])).toEqual([1,2,3]);
    expect(syntaxFunctions.array([88,99,77])).toEqual([88,99,77,4]);
    expect(syntaxFunctions.array(["a","b","c","d"])).toEqual(["a","b","c","d",5]);
});

test('Does the object function work?', () => {
    expect(syntaxFunctions.object({name: "name", user: "user"}))
        .toEqual({name: "name", user: "user", animal: "dog"});
    expect(syntaxFunctions.object({pizza: "pepperoni", sauce: "tomato"}))
        .toEqual({pizza: "pepperoni", sauce: "tomato", animal: "dog"});
    expect(syntaxFunctions.object({num1: 1, num2: 2, num3: 3}))
    .toEqual({num1: 1, num2: 2, num3: 3, animal: "dog"});
});

test('Does the undefined function work?', () => {
    expect(syntaxFunctions.undefinedCheck(undefined)).toBe(true);
    expect(syntaxFunctions.undefinedCheck("a")).toBe(false);
    expect(syntaxFunctions.undefinedCheck(5)).toBe(false);
    expect(syntaxFunctions.undefinedCheck(null)).toBe(false);


});

test('Does the if / else sample function work?', () => {
    expect(syntaxFunctions.isItZero(0)).toBe(true);
    expect(syntaxFunctions.isItZero(1)).toBe(false);
    expect(syntaxFunctions.isItZero(-1)).toBe(false);

});
