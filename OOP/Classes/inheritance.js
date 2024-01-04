class User {
    constructor(username) {
        this.username = username;
    }
    encryptPassword() {
        return `${this.password}abc`
    }

    abc() {
        console.log(`Username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new Course was Added by ${this.username}`)
    }
}

const newTeacher = new Teacher('ranjan', 'js@mail.com', '65456')

newTeacher.addCourse();
newTeacher.abc();

const newUser = new User('abhay');
newUser.abc();

console.log(newTeacher instanceof User)