// let myName = 'Nimisha        '
// let chai = "chai      "

// console.log(myName.truelength);

//factory functions - create 

let myHeros = ['thor', 'spiderman', 'batman']

let heroPower = {
    thor :'hammer',
    spiderman : 'sling',
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Array.prototype.nimisha = function(){
    console.log(`Nimisha is everywhere`);   
}

// heroPower.nimisha()

myHeros.nimisha()

// Inheritance

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASUpport = {
    makeAssign : 'JS',
    fullTime: true
}


let anotherUsername = "chaiAurCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()

'Nimisha'.trueLength()
'iceTea   '.trueLength()




