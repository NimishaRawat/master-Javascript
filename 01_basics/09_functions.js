let add = function (a,b){
    console.log(a+b)
}

add(3,4);



function sum(a,b){
    return a + b;
};

console.log(sum(4,5));

const addition = (a,b) => a+b;

console.log(addition(10,20));


function hof(func){
    func();
}

hof(sayNamaste);

function sayNamaste(){
    console.log("Hello!");
}


function createAdder(number){
    console.log(`Number : ${number}`);
    
    return function (value){
        console.log(`Value : ${value}`)
        return value + number;
    };
}

const addFive = createAdder(5);

console.log(addFive(2));


console.log("Before setTimeOut");

setTimeout(()=>{
    console.log('Inside setTimeOut');
},2000);

console.log('After setTimeout');

// create a new promise using the promise consructor

const myPromise = new Promise((resolve , reject)=>{

    //set a timeout of 1 second
    setTimeout(()=> {
        //generate a random number between 0 and 9
        const randomNum = Math.floor(Math.random() * 10);

        //resolve the promise
        if(randomNum < 5){
            
        }
    })
})

