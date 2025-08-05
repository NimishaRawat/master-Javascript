// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('Nimisha','nimisha@google.com','345')



console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scene

function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

