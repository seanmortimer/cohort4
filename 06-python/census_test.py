from census import Census_Report
import os

file_name = os.getcwd() + '\\data\\Census_by_Community_2018.csv'
output_file = os.getcwd() + '\\data\\test_report.txt'

def test_report():
    report = Census_Report(file_name)
    totals = report.generate_report()
    write = report.write_to_file(output_file)
    totalpop = 1264656
    assert totals['Classes']['Total'] == totalpop
    assert totals['Sectors']['Total'] == totalpop
    assert write == 1
