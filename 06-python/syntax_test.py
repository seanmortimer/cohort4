import syntax

def test_hello():
    assert syntax.hello() == 'hello'


def test_number():
    assert syntax.number(1, 1) == 2
    assert syntax.number(2, 2) == 4
    assert syntax.number(-5, 5) == 0

def test_string():
    assert syntax.string('Sean') == 'Hi my name is Sean'
    assert syntax.string('Bear') == 'Hi my name is Bear'
    assert syntax.string('') == 'Hi my name is '

def test_bools():
    assert syntax.bools(True) == 'You answered true'
    assert syntax.bools(False) == 'You answered false'

def test_lists():
    assert syntax.sum_lists([1, 2, 3]) == 6
    assert syntax.sum_lists([10, 10, 10]) == 30

def test_showName():
    person1 = {'name': 'Sean', 'hobby': 'bikes', 'favNum': 24}
    person2 = {'name': 'Joker', 'hobby': 'crime', 'favNum': 77}
    assert syntax.showName(person1) == 'Sean'
    assert syntax.showName(person2) == 'Joker'

def test_email():
    assert syntax.email('Sean', 'Mortimer') == 'sean.mortimer@python.com'
    assert syntax.email('Michael', 'Scott') == 'michael.scott@python.com'
    assert syntax.email('William', 'Merckxx') == 'william.merckxx@python.com'

def test_tax_calculator():
    pass