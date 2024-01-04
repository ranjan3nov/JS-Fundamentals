class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }
}
const userone = new User('ranjan', 'example@mail.com', '3456');
console.log(userone.encryptPassword());