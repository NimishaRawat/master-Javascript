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
let numbers = [1,2,3,4,5,6,7,8]
console.log(numbers.slice(1,4)); //2,3,4
console.log(numbers);//no modification in original array - 1,2,3,4,5,6,7,8

let num = [1,2,3,4,5,6,7,8]
console.log(num.splice(1,4)); //2,3,4,5
console.log(num); //modified original array - 1,6,7,8


