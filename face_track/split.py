__author__ = 'jake'

#!/usr/bin/env python

# Import module
import os

# Define file_splitter function
def file_splitter(fullfilepath, lines=50):
  """Splits a plain text file based on line count."""
  path, filename = os.path.split(fullfilepath)
  basename, ext = os.path.splitext(filename)

  # Open source text file
  with open(fullfilepath, 'r') as f_in:
    try:
      # Open first output file
      f_output = os.path.join(path, '{}_{}{}'.format(basename, 0, ext))
      f_out = open(f_output, 'w')

      # Read input file one line at a time
      for i, line in enumerate(f_in):
        # When current line can be divided by the line
        # count close the output file and open the next one
        if i % lines == 0:
          f_out.close()
          f_output = os.path.join(path, '{}_{}{}'.format(basename, i, ext))
          read_chunk(f_output)
          f_out = open(f_output, 'w')

        # Write current line to output file
        f_out.write(line)

    finally:
      # Close last output file
      f_out.close()

def read_chunk(file):
    

# Call function with source text file and line count
file_splitter('log.csv', 50)
read_chunk('.')