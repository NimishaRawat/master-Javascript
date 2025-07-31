// let arr = [1,2,3,4,5]

// console.log(arr);

// const newArr = new Array(1,2,3,4,5);

// console.log(newArr);

// console.log(arr.length);

//In js array copy operations create shallow copies
//shallow copies - copy also point to same reference as the original


/*
arr.push(9)
console.log(`push - ${arr}`);

arr.push(11)
console.log(`push - ${arr}`);

arr.pop()
console.log(`pop - ${arr}`);


arr.unshift(9,8,7)
console.log(`unshift - ${arr}`); //similar to push but at start

arr.shift()
console.log(`shift - ${arr}`);  //similar to pop but at start
*/

// console.log(arr.includes(9));   //my array have 9 ?
// console.log(arr.indexOf(5));


// let myArray = [1,2,3,4,5,6,7,8]

// const stringArray = myArray.join(); //covert array to string
// console.log(stringArray);
// console.log(typeof stringArray);

//slice splice
// let numbers = [1,2,3,4,5,6,7,8]
// console.log(numbers.slice(1,4)); //2,3,4
// console.log(numbers);//no modification in original array - 1,2,3,4,5,6,7,8

// let num = [1,2,3,4,5,6,7,8]
// console.log(num.splice(1,4)); //2,3,4,5
// console.log(num); //modified original array - 1,6,7,8

// const myArray = [0,2,3,7,9];

// const myArr2 = new Array(5,67,"true")

// console.log(myArray);

// console.log(myArr2);


// console.log(typeof(myArray));

// console.log(typeof(myArr2));

// const learnings = ['leave', 'present', "understand", 'Silence is the best answer', "Be no one to somebody is better then being unwanted clingy to someone",'leave what not ask to stay','live life']
// console.log(learnings[4]);

// //Array methods

// myArr2.push('8',9)

// console.log(myArr2);

// const payTm = [9,8,7]

// console.log(payTm);

// payTm.unshift(17,19,18,17,16)

// payTm.shift()

// console.log(payTm);

// console.log(payTm.includes(19));


// const arr = [1,2,3,4,5,6]

// const arrToStr = arr.join()

// console.log(arr);
// console.log(arrToStr);

// // slice, splice

// console.log("A ", arr);

// const miniArr = arr.slice(1,4)
// console.log("B" , arr);
// console.log(miniArr);

// const miniArr2 = arr.splice(1,4)
// console.log("C",arr);
// console.log(miniArr2);


// splice manipulates the original array 
// splice also consider last range 
// slice do not manipulate the original array
// slice do not consider last range

const marvel_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros) // dc_heroes has became the 4th element in the array

// const result = marvel_heros.concat(dc_heros) 
// //now they are actually merged and stored in result

// console.log(marvel_heros);
// // It reamins the same

// console.log(result);

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array);

// console.log(Array.isArray("Nimisha"));

// console.log(Array.from("Nimisha"));

// console.log(Array.from({name: "Hitesh"}));
// Interesting case for interviews
// you will get an empty array you have to specificaly 
// say make array with keys, etc

let score1 = 555
let score2 = 747
const score3 =  898
let name = "yes"

console.log(Array.of(score1,score2,score3,name));
//return a new array from a set of elements
