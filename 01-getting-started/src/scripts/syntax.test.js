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
    expect(syntaxFunctions.array([1,2])).toEqual([1,2,2]);
    expect(syntaxFunctions.array([88,99,77])).toEqual([88,99,77,3]);
    expect(syntaxFunctions.array(["a","b","c","d"])).toEqual(["a","b","c","d",4]);
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

test('Does the parameter sample function work?', () => {
    expect(syntaxFunctions.useParameters(0,1)).toBe(1);
    expect(syntaxFunctions.useParameters(1,2)).toBe(3);
    expect(syntaxFunctions.useParameters(-1,8)).toBe(7);
});

test('Does the returns sample function work?', () => {
    expect(syntaxFunctions.returns("username")).toBe("username is a string");
    expect(syntaxFunctions.returns("password")).toBe("password is a string");
    expect(syntaxFunctions.returns(5)).toBe("5 is a string");
});

test('Does the Add to Front of Array function work?', () => {
    expect(syntaxFunctions.addToFront([0,1,2])).toEqual([3,0,1,2]);
    expect(syntaxFunctions.addToFront([0,1,2,3])).toEqual([4,0,1,2,3]);
    expect(syntaxFunctions.addToFront(["a","b","c","d","e","f"]))
        .toEqual([6,"a","b","c","d","e","f"]);
});

test('Does the Add to End of Array function work?', () => {
    expect(syntaxFunctions.addToEnd([0,1,2])).toEqual([0,1,2,3]);
    expect(syntaxFunctions.addToEnd([0,1,2,3,4,5])).toEqual([0,1,2,3,4,5,6]);
    expect(syntaxFunctions.addToEnd(["a","b","c","d","e","f"]))
     .toEqual(["a","b","c","d","e","f",6]);
});   

test('Does the Update Array Values function work?', () => {
    expect(syntaxFunctions.updateArray([0,1,2])).toEqual([0,0,0]);
    expect(syntaxFunctions.updateArray([true, false, true, true]))
        .toEqual([0,0,0, true]);
    expect(syntaxFunctions.updateArray(["a","b","c","d","e","f"]))
        .toEqual([0,0,0,"d","e","f"]);
    expect(syntaxFunctions.updateArray([5])).toEqual([0,0,0]);
});   

test('Does the For Loop function work?', () => {
    expect(syntaxFunctions.forLoop(10))
        .toBe("I have counted to 10, I am a very good computer!");
    expect(syntaxFunctions.forLoop(500))
        .toBe("I have counted to 500, I am a very good computer!");
    expect(syntaxFunctions.forLoop(-5))
        .toBe("I have counted to 0, I am a very good computer!");
});   

test('Does the For / In Loop function work?', () => {
    expect(syntaxFunctions.forIn({name1: "Bill", name2: "Ted"}))
        .toBe("List of names: Bill, Ted, ");
    expect(syntaxFunctions.forIn({name1: "Daffy", name2: "Bugs"}))
        .toBe("List of names: Daffy, Bugs, ");
});   

test('Does the While Loop function work?', () => {
    expect(syntaxFunctions.aWhileLoop(3)).toBe("A, B, C!");
    expect(syntaxFunctions.aWhileLoop(10))
        .toBe("A, B, C, D, E, F, G, H, I, J!");
    expect(syntaxFunctions.aWhileLoop(-5)).toBe("!");
});   

test('Does the While Loop function work?', () => {
    expect(syntaxFunctions.doWhileLoop(3)).toBe("A, B, C!");
    expect(syntaxFunctions.doWhileLoop(10))
        .toBe("A, B, C, D, E, F, G, H, I, J!");
    expect(syntaxFunctions.doWhileLoop(-5)).toBe("A!");

});   

test('Does the array function work?', () => {
    expect(syntaxFunctions.forEachArray(["🦕", "🐉"]))
        .toEqual(["🦕  🌋", "🐉  🌋"]);
    expect(syntaxFunctions.forEachArray(["🦕", "🐊", "🐉", "🦎", "🦖"]))
        .toEqual(["🦕  🌋", "🐊  🌋", "🐉  🌋", "🦎  🌋", "🦖  🌋"]);
    
});