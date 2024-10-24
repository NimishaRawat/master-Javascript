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

console.log(aaj);




/**

console.log(Object.entries(myObj));
console.log(Object.keys(myObj));
console.log(Object.values(myObj));

 console.log(myObj);
 
 console.log(myObj.hasOwnProperty('name'));
 
 console.log(myObj.address.geography.city);
 
 * 
 */


