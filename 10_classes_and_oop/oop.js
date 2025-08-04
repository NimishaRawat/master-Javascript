// object literal

// const user = {
//     username: 'Nimisha',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         //console.log('User details');
//         console.log(`username: ${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function

// const promiseOne = new Promise()
// const date = new Date()

function user1(username, loginCount, isloggeedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggeedIn = isloggeedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

   // return this implicite return is there , you don't have to write it
}

const userOne = new user1('Nimisha',12,true)
const userTwo = new  user1('ChaiAurCode', 32,false)

console.log(userOne.isloggeedIn);
console.log(userTwo.username);

// object create
// constructor function calles inside we have argumenst
// arguments get
console.log(userOne.constructor);//reference to itself

