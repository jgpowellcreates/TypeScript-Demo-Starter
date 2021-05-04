/* Interfaces are often associated with the idea of coding with intent and defining what we're going to need for something
before we get into the weeds of creating that thing. */
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
function sayHello(name) {
    //2
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}
//1
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //2
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchase on ", d);
    };
    return Apples;
}());
//3
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=04-interfaces.js.map