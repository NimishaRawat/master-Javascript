//node 07_date.js

let tarikhhh = new Date()

// console.log(tarikhhh.toDateString());

// console.log(typeof tarikhhh); //object

// console.log(`Today is ${tarikhhh.getDay()} and the date is ${tarikhhh.getDate()} in am using vscode but in ${tarikhhh.getFullYear()} people
// usualy use codespace. The month of ${tarikhhh.getMonth() +1} is a month of festivals`);


let myDate = new Date(2025, 0 , 28)


// let createdDate = new Date("01-28-2024")
// console.log(createdDate.toDateString());

// let dateNow = Date.now();
// console.log(dateNow);


myDate.toLocaleString('default',{
    weekday: "long"
})
console.log(myDate.toDateString());
