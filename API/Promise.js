const promise1 = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log('Async task is completed')
        // resolve();
    }, 1000)
})
// .then is related to resolve
promise1.then(function () {
    // console.log("Promise Consumed");
})
new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('Async task is completed')
        // resolve();
    }, 1000);
}).then(function () {
    // console.log('Async resolved')
})

const promiseThree = new Promise(function (resolve, reject) {
    // setTimeout(function () {
    //     resolve({ id: 1, name: 'ranjan', email: 'ranjan3nov@email.com' })
    // }, 1000)
});

promiseThree.then(function (user) {
    // console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ id: 1, name: 'ranjan', username: 'ranjan3nov@email.com', pass: 123 })
        }
        else {
            reject('Error: Something went worng');
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user);
    // return user.username
})
    .then((username) => {
        // console.log(username);
    })
    .catch((err) => {
        // console.log(err)
    })
    .finally(() => {
        // console.log('Promise is either resolved or rejected') 
    });


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'ranjan@email.com', pass: "123" })
        }
        else {
            reject('Error: Something went worng');
        }
    }, 1000)
});

// Promise is a eventual completion object
async function consumePromiseFive() {

    try {
        const response = await promiseFive;
        // console.log(response);
    } catch (error) {
        // console.error(error); // Handle the error accordingly
    }
};

consumePromiseFive();


async function getAllUsers() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        console.log(data);
    } catch (error) {

        console.log("Error :", error);
    }
}

// getAllUsers();

