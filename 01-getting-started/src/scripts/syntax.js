
// sample if / else
// functions
    // parameters
    // returns
// arrays
    // add to the front
    // add to the end
    // update values
// loops 
    // for
    // for/in
    // while
    // do while
    // forEach (with array and function)
// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value

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
    
    // array (adds a number equal to its index + 1 to the end of an)
    array: (array) => {
        array.push(array.length + 1);
        // console.log("array is: " + array);
        return array;
    },

    // dictionary / objects
    object: (obj) => {
        return {name: "name", user: "user", animal: "dog"};
    }

    // undefined
}

export default syntaxFunctions;