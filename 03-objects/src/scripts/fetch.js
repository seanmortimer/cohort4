class UserData {

    getFirstName(data) {
        return data[0].name;
    }

    // the api we're using doesn't separate first and last names
    getAllFirstNames(data) {    
        const nameArray = [];
        for (let user of data) {
            nameArray.push(user.name);
        }
        // console.log('name array:', nameArray);                                
        return nameArray;
    }
}


const functions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data) {
        return (data[0].name);
    },

    getAllFirstNames(data) {
        return data.map((d, i, x) => d.name);
    },

    showDelayProblem() {
        // console.log('One');
        setTimeout(() => {          // Simulates a fetch
            // console.log("Two");
        }, 1 * 1000);
        // console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            // console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            // console.log(value);
            // console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData(url) {
        const data = await functions.getUsers(url);
        // console.log(functions.getFirstName(data));
        // console.log(functions.getAllFirstNames(data));
        return data;
    },

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
            const output = await response.json()
            output.status = response.status;
            output.statusText = response.statusText;
        return output;   // parses JSON response into native JavaScript objects
    }
    

}


export { UserData, functions };