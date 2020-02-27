
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num > 100) return "extra large";
            return "large";
    },
    
    isEven: (int) => {
        if (int % 2 === 0) return true;
            return false;
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return 0.5;
    }

};

export default functions;
