fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { return response.json() })
    .then((result) => { console.log(result) })
    .catch((err) => { console.log(err) })