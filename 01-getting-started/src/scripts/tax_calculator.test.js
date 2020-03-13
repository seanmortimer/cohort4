import taxFunctions from './tax_calculator'

test('Is tax owed calculated properly?', () => {
    expect(taxFunctions.taxOwed(1)).toBe(0.15);
    expect(taxFunctions.taxOwed(2)).toBe(0.30);
    expect(taxFunctions.taxOwed(48535)).toBe(7280.25);
    expect(taxFunctions.taxOwed(48535.01)).toBe(7280.25);
    expect(taxFunctions.taxOwed(48536)).toBe(7280.46);
    expect(taxFunctions.taxOwed(50000)).toBe(7580.58);
    expect(taxFunctions.taxOwed(97069)).toBe(17229.72);
    expect(taxFunctions.taxOwed(97069.01)).toBe(17229.72);
    expect(taxFunctions.taxOwed(97070)).toBe(17229.98);
    expect(taxFunctions.taxOwed(100000)).toBe(17991.78);
    expect(taxFunctions.taxOwed(150000)).toBe(30991.78);
    expect(taxFunctions.taxOwed(150473)).toBe(31114.76);
    expect(taxFunctions.taxOwed(150474)).toBe(31115.05);
    expect(taxFunctions.taxOwed(200000)).toBe(45477.59);
    expect(taxFunctions.taxOwed(214368)).toBe(49644.31);
    expect(taxFunctions.taxOwed(214369)).toBe(49644.64);
    expect(taxFunctions.taxOwed(1000000)).toBe(308902.87);
    expect(taxFunctions.taxOwed("abc")).toBe(NaN);
});

test('Is tax rate calculated properly?', () => {
    expect(taxFunctions.taxRate(1, 0.15)).toBe("15.0%");
    expect(taxFunctions.taxRate(2, 0.30)).toBe("15.0%");
    expect(taxFunctions.taxRate(48535, 7280.25)).toBe("15.0%");
    expect(taxFunctions.taxRate(60000, 9630.58)).toBe("16.1%");
    expect(taxFunctions.taxRate(97069, 17229.72)).toBe("17.7%");
    expect(taxFunctions.taxRate(100000, 17991.78)).toBe("18.0%");
    expect(taxFunctions.taxRate(150000, 30991.78)).toBe("20.7%");
    expect(taxFunctions.taxRate(214368.50, 49644.31)).toBe("23.2%");
    expect(taxFunctions.taxRate(1000000, 308902.87)).toBe("30.9%");
    expect(taxFunctions.taxRate(1000000, 308902.87)).toBe("30.9%");
});