
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

    add: (numbers) => {
        // console.log("Am I on the right track here? " + numbers[numbers.length - 1]);
        return numbers[numbers.length - 2] + numbers[numbers.length - 1];
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        if (num2 === 0) return "Divide by zero. Here's a puppy: 🐶";
        return num1 / num2;
    }

};

export default functions;
