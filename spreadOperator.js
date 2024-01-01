let arr = [100, 105, 3, 6, 9, 90]
let arr2 = [200, 300, 600, 30, 10]
let arr3 = [500, 600, 600, 300, 10]

let newArr = [...arr, ...arr2, ...arr3]

// console.log("Spread Oprator")
// console.log(newArr[1])

let newArr1 = [arr, arr2, arr3]

// console.log("Without Spread Oprator")
// console.log(newArr1)
// console.log(newArr1[1][0])

let str = "Ranjan"
let sbcSTR = Array.from(str);
console.log(sbcSTR);

// DOM 