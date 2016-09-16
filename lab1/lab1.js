// For your first function, you will calculate the sum of the squares 
// of 3 numbers and return that result. That means sumOfSquares(5, 3, 10)
//  would return 134.

function sumOfSquares(num1, num2, num3) {
    if (num1 === undefined || typeof num1 !== "number") {
        throw "num1 is not a number";
    }
    if (num2 === undefined || typeof num2 !== "number") {
        throw "num2 is not a number";
    }
    if (num3 === undefined || typeof num3 !== "number") {
        throw "num3 is not a number";
    }

    return num1*num1+num2*num2+num3*num3;
}
// sayHelloTo(); // throws 
// sayHelloTo("Phil"); // logs: Hello, Phil! 
// sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
// sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!
function sayHelloTo(firstName, lastName, title){
    if (firstName === undefined) {
        throw "did not enter firstName";
    }
    else if (lastName === undefined) {
        console.log("Hello, ", firstName,"!");
    }
    else if (title === undefined ) {
        console.log("Hello, ", firstName, lastName,". I hope you are having a good day!");
    }
    else {
        console.log("Hello, ", title ,firstName, lastName,"! Have a good evening!");
    }
}
function cupsOfCoffee(howManyCups){
    if (howManyCups === undefined|| typeof num1 !== "number") {
        throw "howManyCups is not a number";
    }
    for(var i = howManyCups;i>0;){
        if(i==1){
            console.log("1 cup of coffee on the desk! 1 cup of coffee!");
            console.log("Pick it up, drink the cup, no more coffee left on the desk!");
            i--;
        }
        else {
            console.log(i," cups of coffee on the desk! ", i," cups of coffee! ");
            i--;
            console.log("Pick one up, drink the cup,",i," cups of coffee on the desk!");
        }
        console.log(" ");
    }
}
function occurrencesOfSubstring(fullString, substring){

}
// function randomizeSentences(paragraph){

// }


// const sumOfSquaresAnswer = sumOfSquares(5,3,10);
// console.log( "the sum of 5, 3, 10 squares is: " ,sumOfSquaresAnswer);

// sayHelloTo(); // throws 
// sayHelloTo("Phil"); // logs: Hello, Phil! 
// sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
// sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!

// cupsOfCoffee(10);

var a = "world";
console.log("hello ${a} !!");
