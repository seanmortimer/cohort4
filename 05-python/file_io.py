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


# # countElse()

# def countChars():
#     file = open('syntax.js', 'r')
#     data = file.read()
#     charCount = len(data)
#     print(f'There are {charCount} characters in syntax.js')

# # countChars()


# def listOfFiles():
#     path = '/code/cohort4/01-getting-started/src/scripts'
#     entries = os.listdir(path)
#     dirSize = os.path.getsize(path)
#     fileCount = 0

#     print(f'Directory size: {dirSize} # of files: {fileCount}')

#     for entry in entries:
#         fileSize = os.path.getsize(path + '/' + entry)
#         fileCount += 1
#         print(f'File name: {entry} ~ Size: {fileSize} bytes')