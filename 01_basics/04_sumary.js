// let BigNumber = 34567890987654345678n;
// console.log(BigNumber);

// let myFunction = function(){
//     console.log("sim ran over me");

// }

// myFunction()

// let obj = {
//     "friday"  : "saiyara",
//     "saturday" : "superman",
//     "sunday" : "Jurasic park"
// }

// console.log(obj);

// console.log(typeof(BigNumber));

// console.log(typeof(myFunction));

// console.log(typeof(obj));

// console.log(typeof(null));

// ------------ Types of memory ----------
// 1. stack used to store primitive datatype
// 2. heap used ot store non primitive datatype


// stack

// let MyName = "Nimisha";

// let nickname = MyName;

// nickname = "Tanu"

// console.log(nickname, MyName);


// heap

let degree = {
    course : "B.Tech",
    specialization : "CS"
}

let qualification = degree;

qualification.specialization = "AI";

console.log(degree, qualification);




