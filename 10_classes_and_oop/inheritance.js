class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`);
        
    }
}


class Teacher extends user{
    constructor(username,email,password){
        super(username); //automatically
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher('Nimisha','nimisha.rawat@google.com','989898');

chai.addCourse()

const masalaChai = new user('nimisha rawat')

chai.logMe()

masalaChai.logMe()


console.log(chai instanceof user);
console.log(masalaChai instanceof Teacher);



