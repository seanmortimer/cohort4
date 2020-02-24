
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
        console.log("number function type: " + typeof(num));
        if (typeof(num) === "number") return true;
            return false;
    },

    // string
    isString: (string) => {
        console.log("string function type: " + typeof(string));
        if (typeof(string) === "string") return true;
        return false;
    },

    // boolean
    isBoolean: (bool) => {
        console.log("boolean function type: " + typeof(bool));
        if (typeof(bool) === "boolean") return true;
        return false;
    }
    
    // array
    // dictionary / objects
    // undefined
}

export default syntaxFunctions;