let pen = {
    username: "Nira",
    age: 21,
    func: function(){
        console.log(`My name is ${this.username}`);
        console.log(this)
    }
}

//this - It refers to the current context

pen.func()

pen.username = "Cherry"

pen.func()

console.log(this);


const Ram = () =>{
    console.log(`Jai Shree Ram`);
    console.log(this);
    
}

Ram()

const add = (num1,num2) => ( {kit: "magic"} )


console.log(add(45,45));


let arr = [1,2,3,4]

arr.forEach( (ele) => console.log(ele))


