import syntaxFunctions from './syntax'


test('Does the number function work?', () => {
    expect(syntaxFunctions.isNumber(1)).toBe(true);
    expect(syntaxFunctions.isNumber('dog')).toBe(false);
    expect(syntaxFunctions.isNumber(true)).toBe(false);
    expect(syntaxFunctions.isNumber([0,1,2])).toBe(false);
    expect(syntaxFunctions.isNumber(undefined)).toBe(false);
});