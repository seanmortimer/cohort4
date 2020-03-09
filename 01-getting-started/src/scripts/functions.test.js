import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");
});

test('Does that isEven function work?', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(0)).toBe(true);
    expect(functions.isEven(5)).toBe(false);   
});

test('Does the add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
    expect(functions.add(55,-45)).toBe(10);
    expect(functions.add(10,-8)).toBe(2);
    expect(functions.add(-10,-8)).toBe(-18);
});

test('Does the subtract function work?', () => {
    expect(functions.subtract(1,2)).toBe(-1);
    expect(functions.subtract(202,101)).toBe(101);
    expect(functions.subtract(55,-45)).toBe(100);
    expect(functions.subtract(10,-8)).toBe(18);
    expect(functions.subtract(-10,-8)).toBe(-2);
});

test('Does the multiply function work?', () => {
    expect(functions.multiply(1,2)).toBe(2);
    expect(functions.multiply(202,101)).toBe(20402);
    expect(functions.multiply(55,-45)).toBe(-2475);
    expect(functions.multiply(10,-8)).toBe(-80);
    expect(functions.multiply(-10,-8)).toBe(80);
    expect(functions.multiply(20, 0)).toBe(0);
    expect(functions.multiply(0, 20)).toBe(0);
});

test('Does the divide function work?', () => {
    expect(functions.divide(1,2)).toBe(0.5);
    expect(functions.divide(202,101)).toBe(2);
    expect(functions.divide(202,0)).toBe("Divide by zero. Here's a puppy: 🐶");
    expect(functions.divide(10,-8)).toBe(-1.25);
    expect(functions.divide(-10,-8)).toBe(1.25);
    expect(functions.divide(0, 20)).toBe(0);
});

test('Does the doMath function work?', () => {
    expect(functions.doMath(1,1,"+")).toBe(2);
    expect(functions.doMath(2,2,"+")).toBe(4);
    expect(functions.doMath(2,2,"-")).toBe(0);
    expect(functions.doMath(2,10,"×")).toBe(20);
    expect(functions.doMath(-2,10,"×")).toBe(-20);
    expect(functions.doMath(2,10,"÷")).toBe(0.2);
    expect(functions.doMath(2,0,"÷")).toBe("Divide by zero. Here's a puppy: 🐶");


});

test('Does the array summing function work?', () => {
    expect(functions.sumArray([1,2])).toBe(3);
    expect(functions.sumArray([1,2,3])).toBe(6);
    expect(functions.sumArray([-10,20,-3])).toBe(7);
    expect(functions.sumArray([10,205,35])).toBe(250);
    expect(functions.sumArray([])).toBe(0);
});

const provinces = {
    AB: "Alberta",
    BC: "British Columbia",
    MB: "Manitoba",
    NB: "New Brunswick",
    NL: "Newfoundland and Labrador",
    NT: "Northwest Territories",
    NS: "Nova Scotia",
    NU: "Nunavut",
    ON: "Ontario",
    PE: "Prince Edward Island",
    QC: "Quebec",
    SK: "Saskatchewan",
    YT: "Yukon"
};

test('Does the province lookup function work?', () => {
    expect(functions.lookupProvince("AB", provinces)).toBe("Alberta");
    expect(functions.lookupProvince("ab", provinces)).toBe("Alberta");
    expect(functions.lookupProvince("MB", provinces)).toBe("Manitoba");
    expect(functions.lookupProvince("mb", provinces)).toBe("Manitoba");
    expect(functions.lookupProvince("NB", provinces)).toBe("New Brunswick");
    expect(functions.lookupProvince("nb", provinces)).toBe("New Brunswick");
    expect(functions.lookupProvince("NL", provinces)).toBe("Newfoundland and Labrador");
    expect(functions.lookupProvince("nl", provinces)).toBe("Newfoundland and Labrador");
    expect(functions.lookupProvince("NT", provinces)).toBe("Northwest Territories");
    expect(functions.lookupProvince("nt", provinces)).toBe("Northwest Territories");
    expect(functions.lookupProvince("NS", provinces)).toBe("Nova Scotia");
    expect(functions.lookupProvince("ns", provinces)).toBe("Nova Scotia");
    expect(functions.lookupProvince("NU", provinces)).toBe("Nunavut");
    expect(functions.lookupProvince("nu", provinces)).toBe("Nunavut");
    expect(functions.lookupProvince("ON", provinces)).toBe("Ontario");
    expect(functions.lookupProvince("on", provinces)).toBe("Ontario");
    expect(functions.lookupProvince("PE", provinces)).toBe("Prince Edward Island");
    expect(functions.lookupProvince("pe", provinces)).toBe("Prince Edward Island");
    expect(functions.lookupProvince("QC", provinces)).toBe("Quebec");
    expect(functions.lookupProvince("qc", provinces)).toBe("Quebec");
    expect(functions.lookupProvince("SK", provinces)).toBe("Saskatchewan");
    expect(functions.lookupProvince("sk", provinces)).toBe("Saskatchewan");
    expect(functions.lookupProvince("YT", provinces)).toBe("Yukon");
    expect(functions.lookupProvince("yt", provinces)).toBe("Yukon");
    expect(functions.lookupProvince("abc", provinces)).toBe("Please enter a valid 2 digit province code.");
});