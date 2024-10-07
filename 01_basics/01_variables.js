const accountId = 144553
let accountEmail = "nimisha17rawat@gmail.com"
var accountPassword = "12345" //prefer not to use var beacuse of block scope anf functional scope issue
accountCity = "Nangal" //bad practice
let accountDetails; //undefined 

accountEmail = "nimisharawat@gmail.com"
accountPassword = "123456"
accountCity = "Gurugram"

console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity])
