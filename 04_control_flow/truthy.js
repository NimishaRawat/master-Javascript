// FALSY VALUES
// false
// 0 , -0
// (BigInt) 0n
// null, undefined
// NaN
// Empty string - false


// TRUTHY VALUES
// "0"
// 'false'
// " "
// {}
// []
// function(){}
// 
// false == 0
// false == ''
// 0 == ''

//how to check empty array as empty array
// is a truthy value

let userName = []
if(userName.length === 0){
    console.log(`Array is empty`)
}

// for objects

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`Object is empty`)
}


// Nullish Coalescing Operator (??): null undefined
// handling the error

let val1;

val = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// If a value is null then give a function
// used when a value is tried to be retireved 
// from somewhere and we failed to do so , 
// so try doing whatever afetr ??


