function SetUsername(username) {
    // Complex DB Calls
    this.username = username;
    console.log("hello")
}
function createUser(username, email, pass) {
    SetUsername.call(this, username);
    this.email = email;
    this.pass = pass;
}

const abc = new createUser('ranjan', 'ranjan@mail.com', '123');
console.log(abc);