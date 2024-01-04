const user = {
    id: 23,
    username: 'ranjan',
    signedIn: true,
    userInside: {
        id: 23,
        username: 'ranjan',
        details: function details() {
            // console.log(this.id);
        }
    }
}

// console.log(user.userInside.details());

function studentDetails(id, name,) {
    this.id = id;
    this.name = name;
    this.welcome = function () {
        console.log(`Hello ${this.name} your user id is ${this.id}`)
    }
    return this;
}

const student_one = new studentDetails(1, 'harsh');
// const student_two = new studentDetails(1, 'harsh');

console.log(student_one.welcome());