import functions from './functions.js';

// **********
//
// Add the event listeners
// 
const numbers = [];
let operator;


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));



document.addEventListener("keyup", ((event) => {
    var keyPressed = event.key;

    // console.log("the key pressed was: " + keyPressed)
    
    if (keyPressed === "+") {
        console.log("The operator is + ");
        numbers.push(Number(idCalcInput.value));

        idOperator.textContent = "  +  ";
        idCalcInput.value = "";

        operator = keyPressed;
    }

    if (keyPressed === "-") {
        console.log("The operator is - "); 
        numbers.push(Number(idCalcInput.value));

        idOperator.textContent = "  -  ";
        idCalcInput.value = "";

        operator = keyPressed;

    }

    if (keyPressed === "*") {
        console.log("The operator is × "); 
        numbers.push(Number(idCalcInput.value));
        idOperator.textContent = "  ×  ";
        idCalcInput.value = "";

        operator = keyPressed;

    }

    if (keyPressed === "/") {
    console.log("The operator is ÷ "); 
        numbers.push(Number(idCalcInput.value));
        idOperator.textContent = "  ÷  ";
        idCalcInput.value = "";

        operator = keyPressed;
    }

    if (keyPressed === "Enter") {
        console.log("Enter was pressed"); 
        numbers.push(Number(idCalcInput.value));
        idCalcInput.value = "";
    
            operator = keyPressed;
        }

}));


idCalcInput.addEventListener('change', (() => {
       
    numbers.push(Number(idCalcInput.value));
    idCalcInput.value = "";
    // console.log("input type: " + typeof idCalcResult.value);
    idCalcResult.textContent = numbers[numbers.length - 1];

    console.log("numbers array: " + numbers);    
    if (numbers.length > 1) {
    idCalcResult.textContent = numbers[numbers.length - 2];
    idCalcResult.textContent += " and " + numbers[numbers.length - 1];
    let result = functions.add(numbers)
    numbers.push(result);
    idCalcResult.textContent += " = " + result;
    }
}));

