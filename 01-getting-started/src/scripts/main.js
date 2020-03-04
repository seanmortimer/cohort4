idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


import functions from './functions.js';

// **********
//
// Add the event listeners
// 
let input1 = document.querySelector("#idCalcInput1")
let input2 = document.querySelector("#idCalcInput2")
let operator;
let result;
let num1;
let num2;

var operatorButtons = document.querySelectorAll(".operatorButton");
console.log(operatorButtons);



const calculate = (operator) => {
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    result = functions.doMath(num1, num2, operator);

    idOperator.innerText = operator;
    idCalcResultx.innerText = "The answer is:";
    idCalcResultxx.innerText = result;

    console.log("operator is: " + operator);
    console.log("num1 is: " + input1.value);
    console.log("num2 is: " + input2.value);
    console.log("result is: " + result);
};

operatorButtons.forEach(button => {
    button.addEventListener('click', (() => {
        operator = button.innerText;
        calculate(operator);
        
    }));  

});

idCalcInput1.addEventListener('change', (() => {
     if (operator != undefined) calculate(operator);
}));

idCalcInput2.addEventListener('change', (() => {
    if (operator != undefined) calculate(operator);
}));
