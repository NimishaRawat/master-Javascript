//Object 
// map is iterable in for of loop 
// not in for in loop
// object is not iteratable in forof loop 
// object is iterable in forin loop
// map has no duplicate values
// 

const map = new Map()
map.set('a',10)
map.set('b',20)
map.set('c',30)

// console.log(map)

for (const [key, value] of map){
    // console.log(key, ' ', value)
}

const myObject = {
    js : "javascript",
    cpp: "C++",
    rb : "Ruby"
}


for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const languages = ['js','cpp','java','py','Ruby']

for (const key in languages) {
    // console.log(key);  0 1 2 3 4 
   // console.log(languages[key]);
}


const map1 = new Map()
map1.set('IN',"India")
map1.set('USA',"United States of America")

for (const key in map) {
    // console.log(key); //not iterable here
}


