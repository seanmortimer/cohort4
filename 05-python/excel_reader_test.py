import pytest
from excel_reader import *

test_file = './data/billy_test_data.xlsx'
  
def test_loadingDatatoDictionary():
    result = load_excelbook(test_file)
    assert result["Customers"][1]["customer_id"] == 1 
    assert result["Customers"][1]["first_name"] == "Adam" 
    assert result["Customers"][1]["last_name"] == "West" 
    assert result["Customers"][1]["address"] == "123 Wayne Manor" 

    assert result["Invoices"][1]["invoice_no"] == 1
    assert result["Invoices"][1]["customer_id"] == 1
    assert result["Invoices"][1]["date"] == "2020-01-01"
    assert result["Invoices"][1]["payment"] == "visa"
    
    assert result["Products"][1]["product_name"] == "Apple"
    assert result["Products"][5]["product_name"] == "Elderberry"

    assert result["Line_Items"][1]["line_id"] == 1 
    assert result["Line_Items"][5]["line_id"] == 5 
    assert result["Line_Items"][5]["quantity"] == 10 
