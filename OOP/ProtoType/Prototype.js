// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let str = "helo   ";
console.log(str.length)

String.prototype.trueLength = function () {
    console.log(`${this.trim().length}`)
}

console.log(str.trueLength())
"// String.setPrototypeOf()  ".trueLength();