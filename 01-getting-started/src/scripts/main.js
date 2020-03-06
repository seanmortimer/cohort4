import functions from './functions.js';
import taxFunctions from './tax_calculator.js';

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));



// **********
//
// Add the event listeners
// 
let input1 = document.querySelector("#idCalcInput1");
let input2 = document.querySelector("#idCalcInput2");
let incomeInput = document.querySelector("#idGrossIncome");
let operator;
let result;
let num1;
let num2;

const operatorButtons = document.querySelectorAll(".operatorButton");
// console.log(operatorButtons);




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

idGrossIncome.addEventListener('change', (() => {
    onTaxInput();
}));

const calculate = (operator) => {
    num1 = Number(input1.value);
    num2 = Number(input2.value);
    result = functions.doMath(num1, num2, operator);

    idOperator.innerText = operator;
    idCalcResultx.innerText = "The answer is:";
    idCalcResultxx.innerText = result;

    // console.log("operator is: " + operator);
    // console.log("num1 is: " + input1.value);
    // console.log("num2 is: " + input2.value);
    // console.log("result is: " + result);
};

const onTaxInput = () => {
    const grossIncome = Number(incomeInput.value)
    const taxOwed = taxFunctions.taxOwed(grossIncome);
    const taxRate = taxFunctions.taxRate(grossIncome, taxOwed);

    console.log("Gross Income received: %f", grossIncome);
    
    idTaxOwed.textContent = "$" + taxOwed.toFixed(2);
    idTaxRate.textContent = taxRate;
};