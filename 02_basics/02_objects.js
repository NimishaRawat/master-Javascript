//singleton
// Object.create

//literal

const mySym = Symbol("@");

const myObj = {
    ID: "1",
    ObjName: "Objaaaa",
    Surname: "Vastu",
    "email Id" : "bike@T.A.C.com",
    [mySym] : "@",
    abc: function(){
        console.log("Hi Baby!")
    }
};

myObj.love = function(){
    console.log("Love is in the hair!");
}

myObj.lover = function(){
    console.log(`Love is in the ${myObj.Surname}!`)
}

//console.log(myObj.love());

//console.log(myObj.lover());




/** 

console.log(myObj);
console.log( myObj.mySym);
console.log(myObj.abc())

myObj.Surname = "Vayakti"

console.log(myObj);

Object.freeze(myObj);

myObj.ID = "2"

*/


// singleton
//Object.create

const mySymbol = Symbol("key1")

//object literals
const jsUser = {
    name : "Nimisha",
    age : 19,
    location : "Mumbai",
    email : "blush@shantipriya.com",
    "Permanent Address" : "un known",
    [mySymbol] : "myKey1"
}
// key , value
// key is processed as string dispite on the datatype you have used

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Permanent Address"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "abc@xyz.com"
//Object.freeze(jsUser)

jsUser.email = "demo@sample.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting())

console.log(jsUser.greetingTwo());


