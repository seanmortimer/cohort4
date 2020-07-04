def hello():
    return 'hello'

def number(x, y):
    return x + y
    
def string(string):
    return f'Hi my name is {string}'

def bools(bool):
    if bool:
         return 'You answered true'
    else :
        return 'You answered false'

def sum_lists(list):
    return sum(list)

def showName(person):
    return person["name"]

def email(fName, lName):
    return f'{fName}.{lName}@python.com'.lower()


def tax_calculator(gross):
    pass