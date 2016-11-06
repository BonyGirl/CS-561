(function () {
    function insertStringIntoText(text,string,num1,num2 ){ 
        let ans = text;
        for(let i =1;i<=num1;i++){
            console.log(i);
            ans = [ans.slice(0,((i-1)*string.length+i*num2)),string,ans.slice(((i-1)*string.length+i*num2))].join('');
            console.log(ans);
        }
        return ans;

    }

    function textManipulator(text,string,num1,num2 ){

        if (text === '') throw "Must provide a text";
        if (string === '') throw "Must provide a string";

        if (typeof num1 !== "number") throw "Must provide a number";
        if (isNaN(num1)) throw "Must provide a number";
        if (typeof num2 !== "number") throw "Must provide a number";
        if (isNaN(num2)) throw "Must provide a number";

        return insertStringIntoText(text,string,num1,num2);
    }
    
    var staticForm = document.getElementById("static-form");

    if (staticForm) {
        // We can store references to our elements; it's better to 
        // store them once rather than re-query the DOM traversal each time
        // that the event runs.
        var inputTextElement = document.getElementById("inputText");
        var inputStringElement = document.getElementById("inputString");
        var firstNumberElement = document.getElementById("number1");
        var secondNumberElement = document.getElementById("number2");

        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        // We can take advantage of functional scoping; our event listener has access to its outer functional scope
        // This means that these variables are accessible in our callback
        staticForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");


                
                // Values come from inputs as strings, no matter what :(
                var textValue = inputTextElement.value;
                var stringValue = inputStringElement.value;
                var firstNumberValue = firstNumberElement.value;
                var secondNumberValue = secondNumberElement.value;


                var parsedFirstNumberValue = parseInt(firstNumberValue);
                var parsedSecondNumberValue = parseInt(secondNumberValue);
                // var operation = operationStringToFunction(operationValue);

                // var result = operation(parsedFirstNumberValue, parsedSecondNumberValue);
                result = textManipulator(textValue,stringValue,parsedFirstNumberValue,parsedSecondNumberValue);
                resultTextElement.textContent = result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();