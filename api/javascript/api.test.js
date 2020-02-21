
global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

test('test that the fetch works?', async () => {

    const clients = [
        {key:1, name:"Larry"},
        {key:2, name:"Lorraine"},
    ]

    // Check that the server is running and clear any data
    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', clients[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Larry");

    // add a second with the same key which should be an error
    data = await postData(url + 'add', clients[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await postData(url + 'add', clients[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Lorraine");

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Larry");

    data = await postData(url + 'update', {key:1, name:"George"});
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("George");

    data = await postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
});


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}
