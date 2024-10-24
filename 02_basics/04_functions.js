function sum(a=45,b=9){

    return a+b
}

//console.log(sum(456,8999));


let table = {
    legs: 4,
    cloth: "Blue",
    material: "Wooden"
}

function description(myTable){
    return `My table has ${myTable.legs} legs with a ${myTable.cloth} cloth on it and of ${myTable.material} material`
}

//console.log(description(table));


let bed = ['sheet', 'pillow'];

function secondEle(myBed){
    return myBed[1];
}

//console.log(secondEle(bed));


//==================================================== Interesting =============================================================

doIt() //no error

function doIt(){
    return "Done";
}

addition(34,56) //error 

const addition = function(a,b){
    return a + b;
}




