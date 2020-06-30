import syntaxFunctions from './syntax'


test('Does the number function work?', () => {
    expect(syntaxFunctions.squareNumber(1)).toBe(1);
    expect(syntaxFunctions.squareNumber(2)).toBe(4);
    expect(syntaxFunctions.squareNumber(3)).toBe(9);
    expect(syntaxFunctions.squareNumber(10)).toBe(100);
    expect(syntaxFunctions.squareNumber(-5)).toBe(25);
    expect(syntaxFunctions.squareNumber(0)).toBe(0);
});

test('Does the string function work?', () => {
    expect(syntaxFunctions.concatString('Homer', 'Simpson')).toBe(
        'Your name is Homer Simpson'
        );
    expect(syntaxFunctions.concatString('Sean', 'Mortimer')).toBe(
        'Your name is Sean Mortimer'
        );
    expect(syntaxFunctions.concatString('', '')).toBe(
        'Your name is  '
        );
});

test('Does the boolean function work?', () => {
    expect(syntaxFunctions.isTrue(true)).toBe('True!');
    expect(syntaxFunctions.isTrue(false)).toBe('False!');
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
    expect(syntaxFunctions.undefinedCheck(NaN)).toBe(false);
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

test('Does the Do While Loop function work?', () => {
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

test('Does the Declare Object function work?', () => {
    expect(syntaxFunctions.createObject("Bill", "Bailey", "Bird"))
        .toEqual({First_Name: "Bill", Last_Name: "Bailey", Pet: "Bird"});
    expect(syntaxFunctions.createObject("Joe", "Lycett", "Cat"))
        .toEqual({First_Name: "Joe", Last_Name: "Lycett", Pet: "Cat"});
    expect(syntaxFunctions.createObject("Noel", "Fielding", "🦖"))
        .toEqual({First_Name: "Noel", Last_Name: "Fielding", Pet: "🦖"});
});

test('Does the Lookup Key function work?', () => {
    expect(syntaxFunctions.lookupKey(
        "Last_Name", 
        {First_Name: "Bill", Last_Name: "Bailey", Pet: "Bird"}
        )).toBe("Bailey");
    expect(syntaxFunctions.lookupKey(
        "Last_Name", 
        {First_Name: "Joe", Last_Name: "Lycett", Pet: "Cat"}
        )).toBe("Lycett");
    expect(syntaxFunctions.lookupKey(
        "Pet", 
        {First_Name: "Noel", Last_Name: "Fielding", Pet: "🦖"}
        )).toBe("🦖");
    });
