
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
        if (num2 === 0) return "Divide by zero. Here's a puppy: 🐶";
        return num1 / num2;
    },

    doMath: (num1, num2, operator) => {
        let result;
        switch (operator) {
            case "+":
                result = functions.add(num1, num2);
                break;
            case "-":
                result = functions.subtract(num1, num2);
                break;
            case "×":
                    result = functions.multiply(num1, num2);
                    break;
            case "÷":
                result = functions.divide(num1, num2);
                break;
            }
        return result;
    },

    sumArray: (array) => {
        let sum = 0;
        let i;
        for (i=0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

};

export default functions;
