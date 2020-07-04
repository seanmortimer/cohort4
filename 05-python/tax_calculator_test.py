import tax_calculator as tax_calc

def test_tax_calc():
    assert tax_calc.tax_calc(1) == 0.15
    assert tax_calc.tax_calc(100) == 15
    assert tax_calc.tax_calc(1000) == 150
    assert tax_calc.tax_calc(48535) == 7280.25
    assert tax_calc.tax_calc(48535.25) == 7280.30
    assert tax_calc.tax_calc(50000) == 7580.58
    assert tax_calc.tax_calc(97069) == 17229.72
    assert tax_calc.tax_calc(97069.25) == 17229.78
    assert tax_calc.tax_calc(100000) == 17991.78
    assert tax_calc.tax_calc(125000.83) == 24492.00
    assert tax_calc.tax_calc(150473) == 31114.76
    assert tax_calc.tax_calc(150473.50) == 31114.90
    assert tax_calc.tax_calc(200000) == 45477.59
    assert tax_calc.tax_calc(214368) == 49644.31
    assert tax_calc.tax_calc(214369) == 49644.64
    assert tax_calc.tax_calc(1E6) == 308902.87
    

