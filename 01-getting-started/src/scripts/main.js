import functions from './functions.js';

// **********
//
// Add the event listeners
// 
const numbers = [];


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));


idCalcNum1.addEventListener('change', (() => {
       
    numbers.push(Number(idCalcNum1.value));
    // console.log("input type: " + typeof idCalcNum1.value);
    console.log("numbers typeof 0: " + typeof numbers[0]);
    console.log("numbers array: " + numbers);    
    if (numbers.length > 1)
    idCalcResult.textContent = functions.add(numbers);
}));

