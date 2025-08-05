class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const nimisha = new User("Nimisha")
console.log(nimisha);

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const Ashly = new Teacher('Ashly','AshlyLi@google.com');
console.log(Ashly.logMe());




