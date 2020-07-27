import csv
import os
import pprint

file_name = os.getcwd() + '\\data\\Census_by_Community_2018.csv'
output_file = os.getcwd() + '\\data\\report.txt'


class Census_Report:
    # Create a census report with total 'res_cnt' by 'CLASS' and 'SECTOR'.
    
    def __init__(self, file_name):
        self.file_name = file_name
        self.report = {
            'Lines': 0,
            'Classes': {'Total': 0},
            'Sectors': {'Total': 0}
            }

    def generate_report(self):
        with open(self.file_name, 'r') as csv_file:
            csv_reader = csv.DictReader(csv_file)

            for row in csv_reader:
                pop = int(row['RES_CNT'])
                
                self.report['Classes'].setdefault(row['CLASS'], 0)
                self.report['Classes'][row['CLASS']] += pop
                self.report['Classes']['Total'] += pop
                
                self.report['Sectors'].setdefault(row['SECTOR'], 0)
                self.report['Sectors'][row['SECTOR']] += pop
                self.report['Sectors']['Total'] += pop
                
                self.report['Lines'] += 1
               
        # pprint.pprint(self.report)
        print(self.report['Lines'])
        return self.report

    def format_output(self, name, res_type, count):
        result = f'The {name.upper()} {res_type.upper()} has a total count of {count}'
        return result

    def write_to_file(self, output_file):
        with open(output_file, 'w') as report_file:
            writer = report_file.write
            writer("-------- 2018 CENSUS-BY-COMMUNITY --------\n\r")
            writer(f"Source: {self.file_name}"+"\n")
            writer(f"Output: {output_file}" + "\n\r")
            writer("-------- report start --------\n\r")
            writer("TOTALS:\n")
            writer(f"Number of lines: {self.report['Lines']}" + "\n" +
                   f"RES_CNT by Classes: {self.report['Classes']['Total']}" + "\n" +
                   f"RES_CNT by Sectors: {self.report['Classes']['Total']}" + "\n")

            writer("\n-------- CLASS DATA --------\n")
            for c in self.report['Classes']:
                if c != 'Total':
                    writer(f"{c}: {self.report['Classes'][c]}\n")

            writer("\n-------- SECTOR DATA --------\n")
            for s in self.report['Sectors']:
                if s != 'Total':
                    writer(f"{s} Sector: {self.report['Sectors'][s]}\n")

            writer("\n-------- report end --------\n\r")

        return 1
