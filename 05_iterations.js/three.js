//for of 

// array specific loop

// array can have object as its elements 
// in it

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world "

for (const greet of greetings) {
    if (greet === ' '){
        continue
    }
    console.log(`Each char is ${greet}`);
}

//maps
// holds key value pair

const map = new Map()
map.set('Fr',"France")
map.set('USA',"united stated of america")
map.set("IN", "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
    
}

const myObject = {
    'game' : "NFS",
    "game 2" : "spidername"
}


// for (const [key,value] of myObject) {
//     console.log(key ,':= ', value);
    
// }

