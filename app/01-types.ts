    //1       //2         //3
let username: string = "instructor";
let password: string = "Letmein1234!";
let instructorId: number = 5;
let isCool: boolean = true;

//1. We declare a variable.   2. We declare the var type.   3. We initialize the var w/ a value of that type
//We can also declar a value and type w/o initialization:
let phoneNumber: number;
let email: string;
let isMarried: boolean;

//We also have 'implicit typing' where we don't have to declare a type:
let greeting = "Hello";
//hovering over the var 'greeting' shows that it is type 'string'

/* 
TypeScript offers compile-time error checking. It won't execute a single line of code until syntax errors are removed:
  - syntax errors
  - typechecking errors
  - compiler crash
  */

//Arrays can be expressed in 2 ways
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya'];
let allScores: Array<number> = [100,92,95,96];
//These have the same effect, but the former option is more prevalent
//Accessing the array indices works in the same way:
console.log("Student List:", studentList[0])

//We can toggle off forced types if the type is not known during development
//We can use "any" type to let the type be decided at compile time
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty, "-- Type changed!");
//The type for the variable can change when declaring an "any" type. See example above!

//Void type has no type at all. This more commonly seen in functions that return no value:
function sayHelloToAll() : void {
    console.log("Hello to all!")
}
//Null and undefined have their own types - like void, not super useful on their own

//Tuple types (hear/think mul"tiple") allow for an array with different types.
//You would still have a fixed number of items in the array and they must be entered in proper order:
let usernameAndId: [number,string];
//initialize it!
usernameAndId = [1, 'jacobisnot93'];

//Enums allow us to give names to numeric values
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword

//like arrays, enums start at 0, but that starting index can be assigned a different number
enum CardType { Ace = 1, Two, Three, Four}
let cardType: string = CardType[2]
console.log(cardType);

//UNION TYPES// - give us more flexiblity w/ our variables

let x: number | string;
let y: number | null;

//now the variables can take on more than one type
x = '1234'
console.log(x, typeof x);
x = 1234;
console.log(x, typeof x);

//x = true;   - Each of these will throw errors because they are not booleans!
//y = false;