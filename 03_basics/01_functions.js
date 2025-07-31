function work(){
    return "work"
}

let my = work()

//console.log(my);

function addTwoNumbers(number1, number2){
    return (number1 + number2);
}

const result = addTwoNumbers(10,50)

//console.log("Result : ",result);

function loginUserMessage(userName = "Billy"){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

const user = loginUserMessage()

//console.log(user);


//Spread operator

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));

const user1 = {
    username : "nimisha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user1)

handleObject({
    username : "fin",
    price : 399
})

const myNewArray = [220,300,400,600,500,600]

function returnFourthValue(getArray){
    return getArray[3]
}

// console.log(returnFourthValue(myNewArray));
console.log(returnFourthValue([111,23,4556,432,45654]));