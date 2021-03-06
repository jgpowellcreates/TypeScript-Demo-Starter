/* Interfaces are often associated with the idea of coding with intent and defining what we're going to need for something
before we get into the weeds of creating that thing. */

interface Animal {
    name: string;
    numberOfLegs: number;
}
//you can't instantiate an interface
//Interfaces aren't used to create objects, but to shape them.
//from the Docs - "One of TypeScript's core principles is that type-checking focuses on the shape that values have"
//we impose an interface on an object/clas to dictate certain aspects of how that object should be shaped

/* 
let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4
} 
*/

//if ^^^code is left this way, a red squiggle will appear under 'lassie' (line 13)
//the error comes from not having implemented the properties for the interface

/* let lassie: Animal = {              CORRECT THIS CODE    CORRECT THIS CODE
    name: 'Lassie',                 CORRECT THIS CODE    CORRECT THIS CODE
    numberOfLugs: 4                 CORRECT THIS CODE    CORRECT THIS CODE
}
 */

//INTerfaces have methods, but they can only have method signatures (not the implementation of the method)

//1
function sayHello(name: string) : string {
    //2
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}

//1 - This line, up until the curly braces, is the method/function signature.
        //Includes the function's name, name parameter & type, and the return type (string)
//2 - This is what is going to happen inside the function when it is called and includes the result
    //NOTE: I added keyword 'function' since this signature exists OUTSIDE of a class (inside a class, it is a method)


//In an interface we create the method signature.
//A class can then provide a full implementation of the method

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}
                //1
class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    //2
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchase on ", d);
    }
}

//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));