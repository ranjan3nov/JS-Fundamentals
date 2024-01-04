class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createID() {
        return `123`;
    }
}
const ranjan = new User('ranjan')
console.log(ranjan.createID())