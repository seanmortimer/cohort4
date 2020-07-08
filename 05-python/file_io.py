import os


def countLines():
    line = open('syntax.js').readlines()
    count = len(line)
    print('Total number of lines is:', count)
    return count



def countElse():
    count = 0
    searchFor = 'else'
    with open('syntax.js') as file:
        lineNo = 0
        for line in file:
            lineNo += 1
            if searchFor in line:
                count += 1
                print(f"found '{searchFor}' on line {lineNo}")
    print(f'There are {count} else statements')
    return count

def countChars():
    file = "syntax.js"
    data = open(file, 'r').read()
    charCount = len(data)
    print(f'There are {charCount} characters in syntax.js')
    return charCount
    

def directoryList():
    path = './'
    entries = os.listdir(path)
    dirSize = os.path.getsize(path)
    totalSize = 0
    files = []

    for entry in entries:
        fileSize = os.path.getsize(path + '/' + entry)
        totalSize += fileSize
        print(f'File: {entry} ---- Size: {fileSize} bytes')
        files.append({"file": entry, "size": fileSize})
    
    print(f'\nDirectory size: {totalSize} bytes, {len(entries)} files and subdirectories\n')
    return files