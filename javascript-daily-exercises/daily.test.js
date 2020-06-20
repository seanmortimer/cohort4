import functions from './daily'


test('Check Fahrenheit conersion', () => {
    expect(functions.convertToFahrenheit(10)).toBe(50); 
    expect(functions.convertToFahrenheit(0)).toBe(32); 
    expect(functions.convertToFahrenheit(-40)).toBe(-40); 
    expect(functions.convertToFahrenheit(200)).toBe(392); 
});