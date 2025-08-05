function SetUsername(username){
    //comlex Db calls
    this.username = username
    console.log('called');
    
}

function createUser(username,email,password){
    SetUsername.call(this, username)
    this.email =  email
    this.password = password
}

const tea = new createUser('Nimisha', 'Nimisha@google.com','workITout@9')
console.log(tea);
