const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 6
// console.log(Math.PI)

const newObj = {
    item: 'Rusk',
    price: 300,
    isAvilable: true,
    myfunc: function () {
        console.log('hello');
    }
}
console.log(Object.getOwnPropertyDescriptor(newObj, "item"))

Object.defineProperty(newObj, 'item', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(newObj, "item"))

for (let [key, value] of Object.entries(newObj)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}