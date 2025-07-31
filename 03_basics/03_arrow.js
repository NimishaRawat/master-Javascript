const user = {
    username : "Yamini",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username} ,welcome !`);
        // console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Tan"
user.welcomeMessage()

// console.log(this);

function elaichiMilk(){
    let username = "Nimisha"
    //console.log(this.username); will print undefined
    //console.log(this) a lot of values , big output
}

elaichiMilk()

const elaichi = function (){
    let username = "Nimisha"
    // console.log(this.username); also undefined
    // console.log(this);  lot of values , big output
}

elaichi()

const elaichi2 = () => {
    let username = "Nimisha"
    //console.log(this.username); also undefined
    //console.log(this); {}
}

elaichi2()

const addition = (num1,num2) => {
    return num1 + num2
}

console.log(addition(7,9));

// Implicite return - keyword return is not needed
const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(3,4));


const objectReturn = (username = "Naina") => ({username: "Nimmo"})

console.log(objectReturn());



const myArray = [2,3,45,7,8]

myArray.forEach(() => {})

