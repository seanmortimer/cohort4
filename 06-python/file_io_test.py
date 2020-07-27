from file_io import *


def test_countLines():
    count = countLines()
    assert count == 163


def test_countElse():
    count = countElse()
    assert count == 2


def test_countChars():
    count = countChars()
    assert count == 3710


def test_directoryList():
    list = directoryList()
    assert len(list) == 2
    assert {"file": "syntax.js", "size": 3873} in list
