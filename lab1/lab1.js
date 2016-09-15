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

// function sayHelloTo(firstName, lastName, title){

// }
// function cupsOfCoffee(howManyCups){

// }
// function occurrencesOfSubstring(fullString, substring){

// }
// function randomizeSentences(paragraph){

// }

const sumOfSquaresAnswer = sumOfSquares(5,3,10);
console.log( "the sum of 5, 3, 10 squares is: " ,sumOfSquaresAnswer);



// console.log("hello!!");
