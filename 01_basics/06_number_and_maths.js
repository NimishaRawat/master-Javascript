//node 06_number_and_maths.js

const panNumber = 90;

let aadharNum = new Number(89900000);

console.log(panNumber);

console.log(aadharNum);

console.log(aadharNum.toString());

console.log(aadharNum.toString().length)

console.log(panNumber.toFixed(2))

console.log(aadharNum.toLocaleString("en-IN"));

const num = 98.77

console.log(num.toPrecision(3));

console.log("Absolute value---------------------------------------------");

const objNum = new Number(5678)
console.log(objNum);
console.log(objNum.valueOf());//returns absolute value of number



//+++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let a = [60,98,5,777,9,29]

console.log(Math.max(...a));
console.log(Math.min(...a));

console.log(Math.abs(-4));

let min = 20;
let max = 30;

let range = Math.floor(Math.random()*(max-min) + 1) + min;

console.log(range);









