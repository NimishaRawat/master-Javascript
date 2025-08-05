function multipleBy5(num){
    return num*5
}

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//function can behave as object 
// Object prototype is null
// everything is object in js

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser('Chai',25)
const tea = new createUser('tea',250)

chai.printMe()

tea.increment()

console.log(tea.score);

/**
 * Here's what happens behind the scenes when the new keyword
 * is used:
 * A new object is created: The new keyword initiates the
 * creation of a new Javascript object.
 * 
 */
