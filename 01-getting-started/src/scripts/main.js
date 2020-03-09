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
let arrayInput = document.querySelector("#idArrayInput");
let operator;
let result;
let num1;
let num2;
let array = [];

const operatorButtons = document.querySelectorAll(".operatorButton");
const arrayButtons = document.querySelectorAll(".arrayButton");




operatorButtons.forEach(button => {
    button.addEventListener('click', (() => {
        operator = button.innerText;
        calculate(operator);
    }));  
    
});

arrayButtons.forEach(button => {
    button.addEventListener('click', (() => {
        switch (button.textContent) {
            case "Add":
                let input = Number(arrayInput.value);
                if (isNaN(input)) {
                idArrayOutput.textContent = "Please enter numbers only"; 
                }
                else {
                    array.push(input);
                    idArrayOutput.textContent = `${input} has been added to the array. `; 
                }
                arrayInput.value = "";
                break;
            
            case "Show":
                if (array.length < 1) {
                    idArrayOutput.textContent = "The array is currently empty"; 
                    }
                    else {
                        idArrayOutput.textContent = `The current array is: ${array}`; 
                    }
                    break;
                
            case "Total":
                const sum = functions.sumArray(array);
                if (array.length < 1) {
                idArrayOutput.textContent = "The array is currently empty"; 
                }
                else {
                    idArrayOutput.textContent = `The sum of the array is: ${sum}`; 
                }
                break;

            case "Clear":
                array = [];
                idArrayOutput.textContent = "The array has been cleared"; 
                break;
        }

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

    // console.log("Gross Income received: %f", grossIncome);
    
    idTaxOwed.textContent = "$" + taxOwed.toFixed(2);
    idTaxRate.textContent = taxRate;
};