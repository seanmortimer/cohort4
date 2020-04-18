class UserData {
    constructor(userArray) {
        this.userArray = userArray;
    }

    getFirstName(data) {
        return this.userArray[0].name;
    }
}

export default UserData;