from excel_reader import *

test_file = './data/billy_test_data.xlsx'
data_file = './data/billy_accounting.xlsx'
  
def test_loadingDatatoDictionary():
    result = excelToDict(test_file)

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

def test_alternate():
    result = alternateWay(test_file)

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

def test_buildInvoice_customer():
    result = buildInvoice(test_file, 1)
    assert result["customer"]["first_name"] == "Adam"

def test_buildInvoice_invoice():
    invoice = buildInvoice(test_file, 1)
    assert invoice["invoice_no"] == 1
    assert invoice["date"] == "2020-01-01"
    assert invoice["total"] == 6
    assert invoice["payment"] == "visa"

def test_buildInvoice_lineItems():
    items = buildInvoice(test_file, 1)["line_items"]
    assert len(items) == 3
    assert items[1]["name"] == "Apple"
    assert items[3]["price"] == 3
    
def test_buildSecondInvoice():
    invoice = buildInvoice(test_file, 2)
    assert invoice["invoice_no"] == 2
    assert invoice["date"] == "2020-01-02"
    assert invoice["payment"] == "amex"
    assert len(invoice["line_items"]) == 2
    assert invoice["total"] == 54

def test_invoicePrint():
    assert printInvoice(test_file, 1) == 6.00 
    assert printInvoice(test_file, 2) == 54.00


def test_invoicePrintData():
    assert printInvoice(data_file, 1) == 1682.01
    assert printInvoice(data_file, 2) == 11019.22
    assert printInvoice(data_file, 25) == 16543.96