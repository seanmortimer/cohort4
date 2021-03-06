const functions = {

    // Would probably be better to have brackets as variables for easy updating

    taxOwed: (grossIncome) => {

        // do just one return at end of function
        // use an array and loop to accomodate many brackets

        if (grossIncome <= 48535) {
            const result = (grossIncome * 0.15);
            const resultRounded = Math.round(result * 100) / 100;
            
            // console.log("Calculating tax in bracket 1, full    :", result);
            // console.log("Calculating tax in bracket 1, Rounded :  %f", resultRounded);
            return resultRounded;
        }
                
        if (grossIncome <= 97069) {
            const result = (grossIncome - 48535) * 0.205 + 7280.25;
            const resultRounded = Math.round(result * 100) / 100;

            // console.log("Calculating tax for %f, bracket 2, full   : %f",grossIncome, result);
            // console.log("Calculating tax for %f, bracket 2, Rounded: %f",grossIncome, resultRounded);
            return resultRounded;
        }

        if (grossIncome <= 150473) {
            const result = (grossIncome - 97069) * 0.26 + 17229.72;
            const resultRounded = Math.round(result * 100) / 100;

            // console.log("Calculating tax for %f, bracket 3, full   : %f",grossIncome, result);
            // console.log("Calculating tax for %f, bracket 3, Rounded: %f",grossIncome, resultRounded);
            return resultRounded;
        }

        if (grossIncome <= 214368) {
            const result = (grossIncome - 150473) * 0.29 + 31114.76;
            const resultRounded = Math.round(result * 100) / 100;

            // console.log("Calculating tax for %f, bracket 4, full   : %f",grossIncome, result);
            // console.log("Calculating tax for %f, bracket 4, Rounded: %f",grossIncome, resultRounded);
            return resultRounded;
        }
        
        else {
            const result = (grossIncome - 214368) * .33 + 49644.31;
            const resultRounded = Math.round(result * 100) / 100;

            // console.log("Calculating tax for %f, bracket 5, full   : %f",grossIncome, result);
            // console.log("Calculating tax for %f, bracket 5, Rounded: %f",grossIncome, resultRounded);
            return resultRounded;
        }
    },

    taxRate: (grossIncome, taxOwed) => {
        let result = 0;
        if (grossIncome !== 0) {
         result = (taxOwed / grossIncome * 100).toFixed(1) + "%";
        }
        return result;
    }
}

export default functions;