__author__ = 'jake'

#!/usr/bin/env python

# Import module
import os
import numpy
import csv
import warnings
warnings.filterwarnings("ignore")       # dont ask

logfile = 'log.csv'
metrics = []    # global
chunk = 50

# Build header by looking at columns of data
def build_header(filename):
    with open(filename, 'rb') as f:             # scan data
        reader = csv.reader(f, delimiter=',')
        data = [line for line in reader]    # import contents
    header = ['Timestamp' , 'Key', 'Value'] # build header
    add_header(filename, header, data)      # add the header to csv


# Insert the header to top os .csv
def add_header(filename, header, data):
    with open(filename,'wb') as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(data)


# Define file_splitter function
def file_splitter(fullfilepath, lines=50):
    path, filename = os.path.split(fullfilepath)
    basename, ext = os.path.splitext(filename)

    # Open source text file
    with open(fullfilepath, 'r') as f_in:
        try:        # Open first output file
            filename = os.path.join(path, '{}_{}{}'.format(basename, 0, ext))
            f_out = open(filename, 'w')
            for i, line in enumerate(f_in):       # Read input file one line at a time
                if i % lines == 0:
                    f_out.close()
                    read_chunk(filename)
                    os.remove(filename)
                    filename = os.path.join(path, '{}_{}{}'.format(basename, i, ext))
                    f_out = open(filename, 'w')
                f_out.write(line)            # Write current line to output file

        finally:                # Close last output file
            f_out.close()
            os.remove(filename)


def read_chunk(filename):       # read chunk, build metric
    happiness = 0
    h_count = 1
    distractedness = 0
    d_count = 1
    figit_bool = 0
    f_count = 0
    figit = []
    time = 0

    build_header(filename)
    input_file = csv.DictReader(open(filename))
    for row in input_file:
        time = row['Timestamp']
        if row['Key'] == 'isHappy':
            happiness = happiness + int(row['Value'])
            h_count = h_count + 1
        elif row['Key'] == 'isDistracted':
            distractedness = distractedness + int(row['Value'])
            d_count = d_count + 1
        elif 'is' not in row['Key']:       # figit
            figit.append(int(row['Key']))

    happiness = 100*(1 - float(happiness)/h_count)
    distractedness = 100*(1 - float(distractedness)/d_count)
    if numpy.var(figit) > 15:
        figit_bool = 1
        f_count = f_count + 1

    metrics.append([time, happiness, distractedness, figit_bool])


def write_metrics(list):        # write to file
    with open("metric.csv", "wb") as f:
        writer = csv.writer(f)
        writer.writerows(list)


def main():
    file_splitter(logfile, chunk)
    write_metrics(metrics)

if __name__ == '__main__':
    main()