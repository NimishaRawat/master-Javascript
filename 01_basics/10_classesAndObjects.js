let carName = "Honda"

//Class is a template for creating objects with similar properties and methods.

class Car{
    //static properties
    static numOfWheels = 4;

    //dynamic properties
    constructor(model,year){
        this.model = model;
        this.year = year;
    }

    //method
    start(){
        console.log(`${this.model} started`);
    }
}

//create an instance of the car class
//Objects are instances of a class which are created using the new keyword.
const myCar = new Car("Honda",2023);

//access properties
console.log(myCar.model);

console.log(Car.numOfWheels);

myCar.start();




