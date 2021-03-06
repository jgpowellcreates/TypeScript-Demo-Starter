//With ES6 and TypeScript, we are able to build a development environment that highlt resembles a classical OOP environment
//OOP - object oriented programming

//1
class Person {
    //2
    firstName: string;
    lastName: string;

    sayHello(){   //notice that methods in our class don't need the 'function' keyword
        console.log("Hello", this.firstName);
    }

    sayHelloToFullName(){
        console.log(`Howdy, ${this.firstName} ${this.lastName}!`); 
    }
}

//3
let phil: Person = new Person();

//4
phil.firstName = "Phil";
phil.lastName = "Donahue";

//1 - using class keyword, we create a new class called "Person"
//2 - we create 2 properties in the class. TS lets us set the types of our props.
//3 - we instantiate the class by setting the type to peson and calling the "new" keyword to create a new instance of the class
//4 - we set the properties on the instance of the "phil" property

/*Instantiation
 - Think of classes as the cookie-cuttter and the object as the cookie.
    The cookie cutter (class) is used over and over to make new cookies (objects)
    The cookies might have different property values, but they are all cookies
*/

let someVariableName: Person = new Person();
//declare a variable with our own custom name and declare the type (it's a custom type of 'Person')
//"new" instantiates a new instance and we call the class w/ parents to invoke the constructor function

//Methods are functions inside the body of a class. We'll add a "sayHello" method to the Person class above
let stevie: Person = new Person();
stevie.firstName = "Stevie";
stevie.sayHello();

let sheriff: Person = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();


//Constructors allow us to more easily create instances of a class by enabling us to instantiate and set props at the same time

//1
class Game {
    constructor(name: string, maker: string) { //2
        this.gameName = name; //4
        this.gameMaker = maker;
    }
    gameName: string; //3
    gameMaker: string;
}

//5                                 //6
let battleship: Game = new Game("Battleship", "Hasbro");

//1 - created new class called Game
//2 - create a constructor for the class that takes in 2 parameters that are type 'string'
//3 - we set up a property called gameName
//4 - we set the value of gameName equal to the value that is passed into the constructor's argument
//5 - we create an instance of the Game class called 'battleship'
//6 - we pass in values to satisfy the reqs of the constructor. If we didn't pass in values, we get an error:

//let operation: Game = new Game(); //Throws an error because 2 args are required in the parameters


//=======================================//
//INHERITANCE - one of the pillars of OOP.
//When writing our classes, we need to think about what properties are universal to all instances...

class Vehicle {   //this is called a "parent class". It holds all props that are universal to all vehicles
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
//inheritance will let us make subclasses of Vehicles that hole these props along w/ props that are unique to its subclass

class Automobile extends Vehicle {  //extends declares the class is going to inherit all of the properties AND methods from
    isSelfDriving: boolean;         //it's parent class. This is called 'subclassing'
}                                   //these subclasses declare properties that are not available to other subclasses

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

//Class Inheritance Practice!
class Animal {
    name: string;
    isMale: boolean;
    age: number;
}

class Dog extends Animal {
    hasOwner: boolean;
    canFetch: boolean;
}

class Bear extends Animal {
    isTames: boolean;
    furColor: string;
}

//=============================//
//PARAMETER PROPERTIES - allow us to make classes even more streamlined by declaring prop types in our constructor params
/* 
class Store {
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');

We can streamline the above pattern's sconstructor using TypeScript:
 */

class Store {
                //1                                    //2    
    constructor(public name: string, public city: string){}
}
let ikea: Store = new Store("Ikea", "Fishers");

//1 - we add a public accessor (will be discussed shortly)
//2 - w/ this method, we don't have to do all of the bindings for out properties inside the constructor (this.name = name)


//==============================//
//ACCESSORS - TS brings us more explicit keywords for determining the accessibility of a member using 'private' and 'public' keywords
    //this allows us to keep certain members private to the class for internal use

        //1
class Employee extends Person{ //declared on line 5
    //2     //3
    private _salary: number;
    //5
    getSalary() : string {
        return this._salary.toString();
    }
            //4
    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);

//1 - class 'Employee' extends Person
//2 - we create a private property, denoted by the 'private' keyword
//3 - common practice to see private properties in classes start w/ an underscore. not required, just common convention
//4 - method 'setSalary' takes in  a numebr and sets val of the private property to the argument passed in (both num types)
//5 - method 'getSalary' returns a string. The method uses simple logic to convert salary number to a string in the return