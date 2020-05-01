const functions = {

    async postData(url = '', data = {}) {
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
            
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json);

            
        // return await response.json();   // parses JSON response into native JavaScript objects
        return json;   
    },
    
    async getData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            // body: ''  // body data type must match "Content-Type" header
        });

        return response;   // parses JSON response into native JavaScript objects
    },

    async delData(url, key) {
        let data = await postData2(url + 'read', key);
        console.log(data);
        return data;
    }
}
    const postData2 = async (url = '', data = {}) => {
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
            
        const json = response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        //    console.log(json);

            
        // return await response.json();   // parses JSON response into native JavaScript objects
        return json;   
}



export default functions;