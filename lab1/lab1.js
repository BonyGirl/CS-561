
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
    "use strict";
    if (howManyCups === undefined || typeof howManyCups !== "number") {
        throw "howManyCups is not a number";
    }
    for(let i = howManyCups;i>0;){
        if(i==1){
            console.log("1 cup of coffee on the desk! 1 cup of coffee!");
            console.log("Pick it up, drink the cup, no more coffee left on the desk!");
            i--;
        }
        else {
            console.log(i,'cups of coffee on the desk! ', i,' cups of coffee! ');
            i--;
            console.log("Pick one up, drink the cup,",i," cups of coffee on the desk!");
        }
        console.log(" ");
    }
}


function occurrencesOfSubstring(fullString, substring) {
    "use strict";
    if (!fullString || typeof fullString !== 'string') {
        console.error( 'ERROR: fullString is not a string' );
        fullString = fullString.toString();
    }
    if (!substring || typeof substring !== 'string') {
        console.error( 'ERROR: substring is not a string' );
        substring = substring.toString();
    }
    var times = 0;
    for(let i=0, subLen = substring.length, len=fullString.length-subLen; i<len; i++) {
        if (fullString.substring(i, i+subLen) === substring) {
            times++;
        }
    }
    return times;
}



function randomizeSentences(paragraph) {
    "use strict";
    if (!paragraph || typeof paragraph !== 'string') {
        console.error( 'ERROR: fullString is not a string' );
        paragraph = paragraph.toString();
    }

    var regexp = /[^\.!\?]+[\.!\?]+/g; // add punctuation here
    paragraph = paragraph.match(regexp);

    for(let i=0, len=paragraph.length, index=0, temp=0; i<len; i++) {
        index = parseInt(Math.random()*(len-1))+i;
        if(index !== i){
            temp = paragraph[i];
            paragraph[i] = paragraph[index];
            paragraph[index] = temp;
        }
    }

    return paragraph.join('');
}


const sumOfSquaresAnswer = sumOfSquares(5,3,10);
console.log( "the sum of 5, 3, 10 squares is: " ,sumOfSquaresAnswer);

// sayHelloTo(); // throws 
sayHelloTo("Phil"); // logs: Hello, Phil! 
sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!

cupsOfCoffee(10);

console.log(occurrencesOfSubstring("hello world", "o"));
console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

console.log(randomizeSentences(paragraph));

// var a = "world";
// console.log("hello %s !!", a);
