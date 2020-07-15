from openpyxl import load_workbook
print()

def excelToDict(file):
    wb = load_workbook(file)
    wb_dict = {}  

    for sheet in wb.worksheets:
        wb_dict[sheet.title] = {}

        for row in sheet.iter_rows(min_row=2, min_col=1):
            id = row[0].value
            wb_dict[sheet.title][id] = {}
            for cell in row:
                label = sheet.cell(row=1, column=cell.column).value
                value = cell.value
                wb_dict[sheet.title][id][label] = value

    return wb_dict


def alternateWay(file):
    wb = load_workbook(file)
    wb_dict = {}  

    for sheet in wb.worksheets:
        wb_dict[sheet.title] = {}
        i = 1
        for row in sheet.values:
           if i == 1:
               labels = row 
           else:
               wb_dict[sheet.title][row[0]] = dict(zip(labels, row))
           i += 1

    return wb_dict
