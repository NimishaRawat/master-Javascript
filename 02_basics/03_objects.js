//singleton

let myObj = new Object();

myObj = {
    name: "Meera",
    address:{
        houseNo : 123,
        geography: {
            city: "Jamshedpur",
            state: "Pune"
        }
    }
}

let tense = {
    yesterday: "Past",
    today: "Present",
    tommorow : "Future"
}

let { today: aaj} = tense;

//console.log(aaj);

/**

console.log(Object.entries(myObj));
console.log(Object.keys(myObj));
console.log(Object.values(myObj));

 console.log(myObj);
 
 console.log(myObj.hasOwnProperty('name'));
 
 console.log(myObj.address.geography.city);
 
 * 
 */

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Nimisha",
            lastname : "Rawat"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }

const obj3 = Object.assign(obj1, obj2)

// console.log(obj3 === obj1);

const obj7 = {...obj1, ...obj2}

//console.log(obj3);


//const instaUser = new Object()

let instaUser = {}
instaUser.id = "123abc"
instaUser.name = "Ginny"
instaUser.isLoggedIn = false

//console.log(instaUser);

const users = [
    {
        id : 1,
        email : "nimidnub"
    },
    {
        id : 2,
        email : "fghj"
    }
]

// console.log(users[1].email);

// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.keys(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLogged'));

//////// De structuring the Array

const course = {
    coursenam : "js in hindi",
    price : "999",
    courseInstructor : "Nimisha"
}

//course.courseInstructor
// make it simple -
 const {courseInstructor} = course


//now only write courseInstructor 
//console.log(courseInstructor);

//or we can give it as our own name
const {courseInstructor : Instructor} = course 
// now u only have to write Instuctor

//console.log(Instructor);

// Apna kaam kisi aur ke sir pe - API call

// JSON
// {
//     "name" : "Hitesh",
//     "coursename" : "Js in hindi"
// }



