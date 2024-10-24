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

console.log(myObj);
console.log( myObj.mySym);
console.log(myObj.abc())

myObj.Surname = "Vayakti"

console.log(myObj);

/** 
Object.freeze(myObj);

myObj.ID = "2"

*/