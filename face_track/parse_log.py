__author__ = 'jake'

import os
import csv
import sys
import time
from collections import defaultdict


# Build header by looking at columns of data
def build_header(filename):

    # scan data
    with open(filename, 'rb') as f:
        reader = csv.reader(f, delimiter=',')
        data = [line for line in reader]    # import contents
    header = ['Timestamp' , 'Key', 'Value'] # build header
    add_header(filename, header, data)      # add the header to csv
    print 'Added Header...'

# Insert the header to top os .csv
def add_header(filename, header, data):
    with open(filename,'wb') as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(data)

def parse_csv(filename):
    columns = defaultdict(list) # each value in each column is appended to a list
    with open(filename) as f:
        reader = csv.DictReader(f) # read rows into a dictionary format
        for row in reader: # read a row as {column1: value1, column2: value2,...}
            for (k,v) in row.items(): # go over each column name and value
                columns[k].append(v) # append the value into the appropriate list
    print 'Split Columns...'
    return columns

def debug_print(columns):
    print(columns['Timestamp'])
    print(columns['Key'])
    print(columns['Value'])


def main():
    filename = "log.csv"
    build_header(filename) # format csv
    columns = parse_csv(filename)
    debug_print(columns)

if __name__ == '__main__':
    main()
