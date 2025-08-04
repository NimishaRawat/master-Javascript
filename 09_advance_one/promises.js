// fetch() - returns a promise
const promiseOne = new Promise(function(resolve,reject){
    //an async task
    //db calls, cryptography,network call
    setTimeout(function(){
        //console.log('Async task is complete');
        resolve(); //connect with .then()
    },1000)
});

promiseOne.then(function(){
    //console.log("promise consumed");//when task inside promise is done
    
})
//console.log();

new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log('Async task2');
        resolve();
    },1000)
}).then(function(){
   // console.log('promise two got executed');
    
})


const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'nimisha@example.com'})
    },1000)
})

promiseThree.then(function(user){
   // console.log(user);
    
})


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: 'Nimisha', password: '123'})
//         }else{
//             reject(`Error : something went wrong`)
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch((msg)=>{
//     console.log(msg);
    
// })
// .finally(()=>console.log('Either promise is resolved or rejected'))


const promiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({language:'javascript', password: 'abc'})
        }else{
            reject('ERROR: JS went wrong')
        }
    },2000)
})

// another syntax for promise resolve or reject
async function consumePromiseFive() {
    try {
        const response  = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         await fetch(...) waits until the fetch promise resolves.
//         Only then response.json() is called on the actual Response object.
//         console.log(data);
//     } catch (error) {
//         console.log('Error : Something went wrong', error);      
//     }
// }

// getAllUsers()


// new Promise(function(resolve,reject){
//     const response = fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     ❌ .json is not a function
//     because response is still a pending promise, not the actual response object yet.
//     resolve(data);
// }).then(function (data) {
//     console.log(data);
// })

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err))

