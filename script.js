//DataType
// Primitive -> Number, String, Boolean, Null, undefined, BigINT
// Non Primitive -> Array, Object,
// Dynamic DataType, Static
// C -> int a = 10; // Static
// js -> var a = 10; // Dynamic
// let a = "hello";
// let inNumber = Number(a);
// if ("sdgds") {
//     console.log(a);

// }
// let a = 10;
// let b = a;
// console.log(b);
// b = 30;
// console.log(b);

// const obj = {
//     id: 1,
//     name: "alok",
// }
// obj.id = 2;
// console.log(obj.id);
// const a = new Number(100);// Number a = 100
// var x = a.toFixed(1);
// console.log(typeof x);
// console.log(a.toFixed(1));
// var balance = 200.236546;
// console.log(balance.toPrecision(5))

// let amt = 3056489000;
// console.log(amt.toLocaleString('en-US'));
// console.log(typeof amt.toString());
// let abc = 10;
// let str = 'I have ' + abc + ' Rupees';
// console.log(str);
// let str1 = `I have ${abc} Rupees`;
// console.log(str1);
// console.log(str.replace('Hello', 'ABCD'))
// console.log(str.toLocaleUpperCase())
// console.log(str.toLocaleLowerCase())
// console.log(str.length)
// console.log(str.charAt(2));
// console.log(str.indexOf('W'));
// console.log(str.substring(0, 4));
// console.log(str.slice(5,-1));
// const words = str.split(',');
// console.log(words);
// console.log(str.includes('ello'));
// console.log(str.trim());

// ------- Math Library -------
// var abc = [10, 30, 50, 80, 90, 655, 45, 30];
// console.log(Math.max(10, 30, 50, 80, 90, 655, 45, 30));
// console.log(Math.min(10, 30, 50, 80, 90, 655, 45, 30));
// console.log(Math.random());
// console.log(Math.floor(Math.random()));
// console.log(Math.ceil(Math.random()));
// min = 10
// max = 50
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

// ----- Array ---
let arr = [10, 50, 60, 30, 10]
// arr[0]=10
// arr[1]=50
const searchItem = 900;
let checkflag = 0;
for (var i = 0; i < a.length; i++) {
    if (searchItem == arr[i]) {
        checkflag = 1;
        console.log(`We got the item `)
        break;
    }
}
if (checkflag == 0) {
    console.log(`We did not got the item `)
}


