// Emoji bank: 🦕 🐊 🐉 🦎 🐍 🦖 🌋

const syntaxFunctions = {
// define attributes / variables
    // number
    isNumber: (num) => {
        // console.log("number function type: " + typeof(num));
        if (typeof(num) === "number") return true;
            return false;
    },

    // string
    isString: (string) => {
        // console.log("string function type: " + typeof(string));
        if (typeof(string) === "string") return true;
        return false;
    },

    // boolean
    isBoolean: (bool) => {
        // console.log("boolean function type: " + typeof(bool));
        if (typeof(bool) === "boolean") return true;
        return false;
    },
    
    // array (adds a number equal to its index + 1 to the end of an array)
    array: (array) => {
        const newArray = [...array];
        newArray.push(array.length);
        // console.log("newArray is: " + array);
        return newArray;
    },

    // dictionary / objects --Adds "animal: dog" to the object, because everything
    // is better with dogs 
    object: (obj) => {
        obj.animal = "dog"
        // console.log(obj);
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
        // console.log(i+1);
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
            // console.log(text);
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
        // console.log(text);
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
        // console.log("return text: " + text);
        return text;

    },

    // forEach (with array and function)
    //Array
    forEachArray: (array) => {
        let newArray = [...array];

        const makeExtinct = (item, index, array) => {
            array[index] = item + "  🌋" ;
            // console.log("makeExtinct is: " + array[index]);
            };

        newArray.forEach(makeExtinct);      
        
        // console.log("newArray is now: " + newArray);
        return newArray;
    }

// Objects / Dictionaries
    // declare object



    // lookup key to retrieve value

}

export default syntaxFunctions;

