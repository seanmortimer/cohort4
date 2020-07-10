import csv
import os

file_name = os.getcwd() + '\\data\\Census_by_Community_2018.csv'
output_file = os.getcwd() + '\\data\\report.txt'


class Report_Generator:
    """Report_Generator, creates a report with total
    'res_cnt' by 'CLASS' and 'SECTOR'. The class and
    sectors do not need to be known before execution
    to count what the Class or Sector names will be.
    The code will only loop through the data once
    """

    def __init__(self, file_name, output_file):
        self.count = 0
        self.class_count = 0
        self.sector_count = 0
        self.class_data = dict()
        self.sector_data = dict()
        self.output = ""
        self.file_name = file_name
        self.output_file = output_file

    def generate_output(self):
        with open(self.file_name, 'r') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            for row in csv_reader:
                if row['CLASS'] in self.class_data:
                    self.class_data[row["CLASS"]] += int(row["RES_CNT"])
                    self.class_count += int(row["RES_CNT"])
                else:
                    self.class_data[row["CLASS"]] = int(row["RES_CNT"])
                    self.class_count += int(row["RES_CNT"])
                if row['SECTOR'] in self.sector_data:
                    self.sector_data[row["SECTOR"]] += int(row["RES_CNT"])
                    self.sector_count += int(row["RES_CNT"])
                else:
                    self.sector_data[row["SECTOR"]] = int(row["RES_CNT"])
                    self.sector_count = int(row["RES_CNT"])

        self.write_to_file(output_file)

    def format_output(self, name, res_type, count):
        result = f'The {name.upper()} {res_type.upper()} has a total count of {count}'
        return result

    def write_to_file(self, output_file):
        with open(output_file, 'w') as report_file:
            writer = report_file.write
            writer("-------- CEN-BY-COMM-2018 --------\n\r")
            writer(f"Source: {self.file_name}"+"\n")
            writer(f"Output: {self.output_file}" + "\n\r")
            writer("-------- report start --------\n\r")
            writer("TOTALS:")
            writer(f"The total number of lines: {self.count}" + "\n\r" +
                   f"The total for the Class Data is : {self.class_count}" + "\n\r" +
                   f"The total for the Sector Data is : {self.sector_count}" + "\n\r")

            if self.class_data:
                writer("\n-------- CLASS DATA --------\n")
                for c in self.class_data:
                    writer(self.format_output(
                        c, "CLASS", self.class_data[c])+'\n')
            if self.sector_data:
                writer("\n-------- SECTOR DATA --------\n")
                for s in self.sector_data:
                    writer(self.format_output(
                        s, "SECTOR", self.sector_data[s])+"\n")

            writer("\n\r--------report end--------\n\r")

    def destruct(self):
        self.count = None
        self.class_count = None
        self.class_data = None
        self.sector_data = None
        self.file_name = None


rg = Report_Generator(file_name, output_file)
rg.generate_output()

