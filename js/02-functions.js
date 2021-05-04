/* JS Basics Review
Vanilla JS has a lot of flexibility in function arguments */
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); // we can call the function with a num
demoFunction("stuff"); //we can call the function with a string
//demoFunction(1, "stuff"); //we can supposedly add arguements that weren't originally declared... but these won't work in TS
//TS allows us to bring types to our paramters and limits the number of arguments we pass in
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
//addNumbers(1,2,3);
//addNumbers(1, "Foo");
//3 - Practice
function makeName(fName, lName) {
    var fullName = fName + " " + lName;
    console.log(fullName);
    return fullName;
}
makeName("Jacob", "Powell");
//Return Types         //1         //2
function sayHelloFn(name) {
    return name;
}
sayHelloFn("Kenn"); //3
//sayHelloFn(1); //4
//1 - we create a type for our parameter, a string
//2 - we use the colon follow by a type to denote a return type
//3 - we call the function & pass in a string arg. Argument satisfies the return type, so this function works
//4 - call the function and pass in the wrong return type. Argument does not satisfy the return type, so the code breaks
//Practice Function!
function practiceFunction(username, password) {
    if (username == 'elevenfiftyuser' && password == 'Letmein1234!') {
        return true;
    }
    else {
        return false;
    }
}
console.log(practiceFunction("jacobpowell", "strongpassword")); //false
//console.log(practiceFunction("elevenfiftyuser", 1234)); // false - AND throws error in tsc
console.log(practiceFunction("elevenfiftyuser", "Letmein1234!")); //true
//OPTIONALS allow for flexibility in our parameters to leave out arguments
//Optionals are declared using a question mark after them
//param is optional. Does not require an arg
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
} // hovering over the function names shows that someString has a union type of 'string | undefined'
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional"); //optional params MUST go after all required params
//Practice Optional Function
function returnName(firstName, lastName, midName) {
    if (midName) {
        return (firstName + " " + midName + " " + lastName);
    }
    else {
        return (firstName + " " + lastName);
    }
}
console.log(returnName("Jacob", "Powell")); // if you don't include the conditional logic, it will return midName as undefined
console.log(returnName("Jacob", "Powell", "Garrison"));
//# sourceMappingURL=02-functions.js.map