class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }
    get pass() {
        return `${this._pass.toUpperCase()}pass`;
    }
    set pass(value) {
        this._pass = value.toUpperCase();
    }
}


const abc = new User('ranjan@mail.com', 'ABCDEFadsfaz')

console.log(abc.pass)