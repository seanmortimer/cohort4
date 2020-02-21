#
# See README.md for instructions
#
import pytest

from flask import json
import web

calgary = {"key":1, "city":"Calgary", "lat":51.05, "long":-114.05}
edmonton = {"key":2, "city":"Edmonton", "lat":53.55, "long":-113.49}
redDeer = {"key":3, "city":"Red Deer", "lat":52.28, "long":-113.81}

@pytest.fixture
def client():
    web.app.config['TESTING'] = True
    client = web.app.test_client()

    yield client


def test_root(client):
    rv = client.get('/')
    assert(rv.status_code == 200)
    assert(b'EvolveU Test API' in rv.data)


def test_clear(client):
    # clear out all the data
    rv = client.post('/clear')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(json == {})


def test_add(client):
    # clear out all the data
    rv = client.post('/clear')

    # add a good one and make sure it works
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)
   
    # add one with out a key and make sure it fails
    rv = client.post('/add', 
        json={"city":"Calgary", "lat":51.05, "long":-114.05})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # add the same key again to make sure it fails
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 400)
    assert("msg" in json)
   
    # add one with a string key it will cause the all to fail
    rv = client.post('/add', 
        json={"key":"cal", "city":"Calgary", "lat":51.05, "long":-114.05})
    assert(rv.status_code == 400)
    assert("msg" in json)

    # we should have one entry after all this
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)
    

def test_delete(client):

    # clear out all the data
    rv = client.post('/clear')

    # delete one without a key and make sure it fails
    rv = client.post('/delete', 
        json={"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # delete one that does not exist and make sure it fails
    rv = client.post('/delete', 
        json={"key":9,"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # add a good one to delete
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)

    # delete, and make sure it works
    rv = client.post('/delete', 
        json=calgary)
    assert(rv.status_code == 200)

    # we should have nothing in it
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 0)

def test_read(client):

    # clear out all the data
    rv = client.post('/clear')

    # read one without a key and make sure it fails
    rv = client.post('/read', 
        json={"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # read one that does not exist and make sure it fails
    rv = client.post('/read', 
        json={"key":9,"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # add a good one to read
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)

    # read, and make sure it works
    rv = client.post('/read', 
        json=calgary)
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(json[0]['city'] == "Calgary")


def test_update(client):

    # clear out all the data
    rv = client.post('/clear')

    # update one without a key and make sure it fails
    rv = client.post('/update', 
        json={"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # update one that does not exist and make sure it fails
    rv = client.post('/update', 
        json={"key":9,"city":"calgary"})
    assert(rv.status_code == 400)
    json = rv.get_json()
    assert("msg" in json)

    # add a good one to update
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)

    # update, and make sure it works
    rv = client.post('/update', 
        json={"key":1, "city":"Denholm", "lat":31.05, "long":-110.05})
    assert(rv.status_code == 200)

    # read, and make sure it works
    rv = client.post('/read', 
        json=calgary)
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(json[0]["city"] == "Denholm")


def test_load(client):

    rv = client.get('/load')
    assert(rv.status_code == 200)
    rv = client.post('/all')
    assert(rv.status_code == 200)

def test_crud(client):

    # clear out all the data
    rv = client.post('/clear')

    # we should start with no data
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 0)

    # add one
    rv = client.post('/add', 
        json=calgary)
    assert(rv.status_code == 200)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # add a second one
    rv = client.post('/add', 
        json=edmonton)
    assert(rv.status_code == 200)

    # we should have two now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 2)

    # delete edmonton and there should be one
    rv = client.post('/delete', 
        json={"key": edmonton["key"]})
    assert(rv.status_code == 200)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # delete edmonton again and there should still be one
    rv = client.post('/delete', 
        json={"key": edmonton["key"]})
    # the delete should fail
    assert(rv.status_code == 400)

    # we should have one now
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 1)

    # clear the data and there should zero
    rv = client.post('/clear', )
    assert(rv.status_code == 200)

    # they should be all gone
    rv = client.post('/all')
    assert(rv.status_code == 200)
    json = rv.get_json()
    assert(len(json) == 0)


def test_test(client):
    # data or json can be sent but not both
    rv = client.post('/test', 
        # data=dict(fname="Larry", lname="Shumlich"), 
        json={"key1":"value1","key2":"value2"})
    assert(rv.status_code == 200)
    # print('test_test rv: ',rv)
    # print('test_test rv.data: ',rv.data)
    # print('test_test rv.json: ',rv.get_json())
