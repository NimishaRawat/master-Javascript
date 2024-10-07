"use strict";//treat all js code as newer version

console.log(typeof null); //object

console.log(undefined); //undefined

const id = Symbol("123")
const idNew = Symbol("123")

console.log(id);
console.log(idNew);
//but 
console.log(id == idNew);   //false
console.log(id === idNew);  //false


//-----------------------------------------------------------------------------------------------------------------------------------------------
// Primitive - Number , String , undefined , null , boolean , Symbol
// Non-primitive - Array function Object

// -------------------------------------Memory-------------------------------------------
// Stack(primitive)     Heap(non-primitive)

// In stack you get the copy of same variable
// In heap you get reference to the same object

let job = "IBM"
let newJob = job;
newJob = "Accenture"

console.log(job); //IBM
console.log(newJob); //Accenture

//value is same in job not updated

//BUT!!!!!!!!!!!!!!!!!!!!!!
//In non-primitive

let employee = {
    name: "Nimisha",
    age: 21
}

let employee2 = employee;
employee2.age = 22;

console.log(employee.age); //22
console.log(employee2.age); //22

//now value get updated in both the objects because they have the reference to original object





