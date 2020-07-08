from file_io import *

def test_countLines():
    count = countLines()
    assert count == 163
    
def test_countElse():
    count = countElse()
    assert count == 2
    