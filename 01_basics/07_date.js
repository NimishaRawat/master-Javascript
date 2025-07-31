// // //node 07_date.js

// // let tarikhhh = new Date()

// // // console.log(tarikhhh.toDateString());

// // // console.log(typeof tarikhhh); //object

// // // console.log(`Today is ${tarikhhh.getDay()} and the date is ${tarikhhh.getDate()} in am using vscode but in ${tarikhhh.getFullYear()} people
// // // usualy use codespace. The month of ${tarikhhh.getMonth() +1} is a month of festivals`);


// // let myDate = new Date(2025, 0 , 28)


// // // let createdDate = new Date("01-28-2024")
// // // console.log(createdDate.toDateString());

// // // let dateNow = Date.now();
// // // console.log(dateNow);


// // myDate.toLocaleString('default',{
// //     weekday: "long"
// // })
// // console.log(myDate.toDateString());


// let date = new Date()

// console.log(typeof(date));

// console.log(date.toDateString());

// console.log(date.toISOString());

// console.log(date.toJSON());

// console.log(date.toLocaleDateString());

// console.log(date.toLocaleString());

// console.log(date.toLocaleTimeString());

// console.log(date.toString());

// console.log(date.toTimeString());

// console.log(date.toUTCString());

let myCreatedDate = new Date("01-28-2025")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

// we get output in mili seconds 

// let's convert it into seconds like this -
console.log(Math.floor(Date.now()/1000));
// to avoid decimal values we have used Math.floor


let newDate =  new Date();

console.log(newDate);

console.log(newDate.getMonth());

console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})


