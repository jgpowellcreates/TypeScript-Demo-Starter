//With ES6 and TypeScript, we are able to build a development environment that highlt resembles a classical OOP environment
//OOP - object oriented programming
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    Person.prototype.sayHelloToFullName = function () {
        console.log("Howdy, " + this.firstName + " " + this.lastName + "!");
    };
    return Person;
}());
//3
var phil = new Person();
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
var someVariableName = new Person();
//declare a variable with our own custom name and declare the type (it's a custom type of 'Person')
//"new" instantiates a new instance and we call the class w/ parents to invoke the constructor function
//Methods are functions inside the body of a class. We'll add a "sayHello" method to the Person class above
var stevie = new Person();
stevie.firstName = "Stevie";
stevie.sayHello();
var sheriff = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();
//Constructors allow us to more easily create instances of a class by enabling us to instantiate and set props at the same time
//1
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4
        this.gameMaker = maker;
    }
    return Game;
}());
//5                                 //6
var battleship = new Game("Battleship", "Hasbro");
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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//inheritance will let us make subclasses of Vehicles that hole these props along w/ props that are unique to its subclass
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle)); //these subclasses declare properties that are not available to other subclasses
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
//Class Inheritance Practice!
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
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
var Store = /** @class */ (function () {
    //1                                    //2    
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store("Ikea", "Fishers");
//1 - we add a public accessor (will be discussed shortly)
//2 - w/ this method, we don't have to do all of the bindings for out properties inside the constructor (this.name = name)
//==============================//
//ACCESSORS - TS brings us more explicit keywords for determining the accessibility of a member using 'private' and 'public' keywords
//this allows us to keep certain members private to the class for internal use
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//1 - class 'Employee' extends Person
//2 - we create a private property, denoted by the 'private' keyword
//3 - common practice to see private properties in classes start w/ an underscore. not required, just common convention
//4 - method 'setSalary' takes in  a numebr and sets val of the private property to the argument passed in (both num types)
//5 - method 'getSalary' returns a string. The method uses simple logic to convert salary number to a string in the return
//# sourceMappingURL=03-classes.js.map