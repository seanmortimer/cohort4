// Emoji bank: 🦕 🐊 🐉 🦎 🐍 🦖 🌋

const syntaxFunctions = {
// define attributes / variables
    // number
    squareNumber: (num) => {
            return num * num;
    },

    // string
    concatString: (fName, lName) => {
        return `Your name is ${fName} ${lName}`;
    },

    // boolean
    isTrue: (bool) => {
        if (bool === true) return 'True!';
        return 'False!';
    },
    
    // array 
    // add a number equal to its original length to the end of an array
    array: (array) => {
        const newArray = [...array];
        newArray.push(array.length);
        return newArray;
    },

    // dictionary / objects 
    // Adds "animal: "dog"" to the object, because everything is
    // better with dogs 
    object: (obj) => {
        obj.animal = "dog"
        return obj;
    },

    // undefined
    undefinedCheck: (variable) => {
        // console.log(variable);
        if (variable === undefined) return true;
        return false;
    },

// sample if / else
    isItZero: (num) => {
        if (num === 0) {return true;}
        else {return false;}
    },

// functions
    // parameters
    useParameters: (num1, num2) => {
        return num1 + num2;
    },
    
    // returns 
    returns: (string) => {
        return string + " is a string";
    },

// arrays
    // add to the front the initial length of the array
    addToFront: (array) => {
        const newArray = [...array];
        newArray.unshift(newArray.length);
        return newArray;
    },

    // add to the end the initial length of the array
    addToEnd: (array) => {
        const newArray = [...array];
        newArray.push(array.length);
        return newArray; 
    },

    // update values (change first three values to zero)
    updateArray: (array) => {
        const newArray = [...array];
        newArray[0] = 0;
        newArray[1] = 0;
        newArray[2] = 0;
        return newArray;
    },

// loops 
    // for
    forLoop: (num) => {
        let i; 
        for (i = 0; i < num; i++) {
        }
    return "I have counted to " + i + 
    ", I am a very good computer!"; 
    },

    // for/in
    forIn: (names) => {
        let text = "List of names: ";
        let x;
        
        for (x in names) {
            text += names[x] + ", "
        }
        return text;
    },

    // while: Write the alphabet up to a target number
    aWhileLoop: (target) => {
        let text = "";
        let i = 0;

        while (i < target - 1) {
            text += String.fromCharCode(65 + i) + ", "
            i++;
        }
        if (i != 0) {text += String.fromCharCode(65 + i)}
        text += "!";
        return text;
    },

    // do while: Write the alphabet up to a target number
    // will always return at least "A!"
    doWhileLoop: (target) => {
        let text = "";
        let i = 0;

        do {
            text += String.fromCharCode(65 + i)
            if (i < target - 1) {text += ", ";};
            i++;
        }
        while (i < target);
        text += "!";
        return text;

    },

    // forEach (with array and function)
    //Array
    forEachArray: (array) => {
        let newArray = [...array];

        const makeExtinct = (item, index, array) => {
            array[index] = item + "  🌋" ;
            };

        newArray.forEach(makeExtinct);      
        return newArray;
    },

// Objects / Dictionaries
    // declare 
    createObject: (firstName, lastName, pet) => {
        let object = {First_Name: firstName, Last_Name: lastName, Pet: pet};
        return object;
    },

    // lookup key to retrieve value
    lookupKey: (key, object) => {
        let result = object[key];
        return result;
    }
}

export default syntaxFunctions;
